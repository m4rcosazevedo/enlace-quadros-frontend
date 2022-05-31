import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { alertService, AlertType } from '../../services/alert.service'

const MILLISECONDS = 1000
const ONE_SECOND = MILLISECONDS

export const Alert  = ({ id, fade }) => {
  const mounted = useRef(false)
  const router = useRouter()
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    mounted.current = true

    const subscription = alertService.onAlert(id)
    .subscribe(alert => {
      if (!alert.message) {
        setAlerts(alerts => {
          const filteredAlerts = alerts.filter(item => item.keepAfterRouteChange)

          return omit(filteredAlerts, 'keepAfterRouteChange')
        })
      } else {
        alert.itemId = Math.random();
        setAlerts(alerts => ([...alerts, alert]));
        if (alert.autoClose) {
          const timeout = setTimeout(_ => {
            removeAlert(alert)
            clearTimeout(timeout)
          }, 10 * ONE_SECOND)
        }
      }
    })

    const clearAlerts = _ => alertService.clear(id)
    router.events.on('routeChangeStart', clearAlerts)

    return () => {
      mounted.current = false

      subscription.unsubscribe()
      router.events.off('routeChangeStart', clearAlerts)
    }
  }, [])

  function omit(arr, key) {
    return arr.map(obj => {
        const { [key]: omitted, ...rest } = obj;
        return rest;
    });
}

  function removeAlert(alert) {
    if (!mounted.current) return

    if (fade) {
      setAlerts(alerts => alerts.map((x) => x.itemId === alert.itemId ? { ...x, fade: true } : x))
    }

    const timeout = setTimeout(() => {
      setAlerts(alerts => alerts.filter(x => x.itemId !== alert.itemId))
      clearTimeout(timeout)
    }, fade ? 250 : 0)
  }

  function cssClasses(alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
        [AlertType.Success]: 'alert-success',
        [AlertType.Error]: 'alert-danger',
        [AlertType.Info]: 'alert-info',
        [AlertType.Warning]: 'alert-warning'
    }

    classes.push(alertTypeClass[alert.type])

    if (alert.fade) {
        classes.push('fade')
    }

    return classes.join(' ')
  }

  if (!alerts.length) return null

  return (
    <div>
      {alerts.map((alert, index) => (
        <div key={`alert-${index}`} className={cssClasses(alert)}>
          <a className="close" onClick={() => removeAlert(alert)}>&times;</a>
          <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
        </div>
      ))}
    </div>
  )

}

Alert.propTypes = {
  id: PropTypes.string,
  fade: PropTypes.bool
}

Alert.defaultProps = {
  id: 'default-alert',
  fade: true
}
