import * as BT from 'reactstrap'

export const Submit = (props) => {
  const {
    text = 'Enviar',
    submittingText = 'Enviando',
    busy = false,
    ...rest
  } = props

  return (
    <BT.Button className="w-100" disabled={busy} color="primary" {...rest}>{busy ? submittingText : text}</BT.Button>
  )
}
