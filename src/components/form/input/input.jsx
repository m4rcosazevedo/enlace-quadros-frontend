import * as BT from 'reactstrap'

export const Input = ({ text, name, id = name, value = '', ...rest }) => {
  return (
    <BT.FormGroup className="position-relative">
      <BT.Label htmlFor={id}>{text}</BT.Label>
      <BT.Input name={name} id={id} {...rest} value={value} />
    </BT.FormGroup>
  )
}
