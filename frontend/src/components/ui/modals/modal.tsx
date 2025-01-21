import { useMemo } from 'react'
import { Button, Modal, ModalProps } from 'react-bootstrap'

interface DialogProps extends ModalProps {
  title?: string,
  children?: React.ReactNode,
  footer?: {
    close?: boolean,
    confirm?: boolean
  },
  onClose?: () => void,
  onConfirm?: () => void
}
export const Dialog: React.FC<DialogProps> = ({ title, children, onClose, onConfirm, footer, ...props }) => {
  const modal = useMemo(() => ({
    close: footer?.close ?? true,
    confirm: footer?.confirm ?? true,
  }), [footer])
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column justify-content-between'>
          <div>
            {children}
          </div>
          <div className='d-flex flex-row ms-auto gap-2'>
            {modal.close && <Button variant='danger' onClick={onClose}>Close</Button>}
            {modal.confirm && <Button onClick={onConfirm}>Confirm</Button>}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}