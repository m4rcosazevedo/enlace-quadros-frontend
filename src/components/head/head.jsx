import { withRouter } from 'next/router'
import envs from '../../config/envs'
import NextHead from 'next/head'

export const Head = withRouter(({ router, title, description }) => {
  const url = envs.URL_ORIGIN + router.asPath

  return (
    <NextHead>
      <title>{`Enlace Quadros${title && ': '+title}`}</title>
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
    </NextHead>
  )
})
