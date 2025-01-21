import { Toast, ToastContainer, ToastProps } from 'react-bootstrap'

interface NotificationProps extends ToastProps {
  children?: React.ReactNode,
  header?: React.ReactNode,
}
export const Notification: React.FC<NotificationProps> = ({ header, children, ...props }) => {
  return (
    <ToastContainer position='top-end' className='mt-4 me-4'>
      <Toast {...props} >
        <Toast.Header className='f-flex justify-content-between' closeButton>{header || <div></div>}</Toast.Header>
        <Toast.Body>
          {children}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}