import { useState } from 'react'
import Modal from '../modal/modal'

export const AlertError = ({ message }) => {
  const [modal, setModal] = useState(true)

  return (
    <Modal onClose={() => setModal(false)} show={modal}>
      {message}
    </Modal>
  )
}
