import { Modal, ModalProps } from 'react-bootstrap'

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
        </div>
      </Modal.Body>
    </Modal>
  )
}