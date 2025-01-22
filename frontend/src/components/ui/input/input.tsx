import { Form, FormControlProps } from 'react-bootstrap'
import classes from './input.module.scss';
import { cn } from '@/utils/cn';
import { Controller, ControllerProps } from 'react-hook-form';
interface InputProps extends FormControlProps {
  label?: string,
  error?: boolean | string
}
export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <Form.Group className='mb-2'>
      <Form.Label className='mb-1'>{label}</Form.Label>
      <Form.Control
        {...props}
        placeholder='okla'
        isInvalid={!!error}
      />
      {error && <p className={cn('text-danger', classes.inputLabel)}>{error}</p>}
    </Form.Group>
  )
}

export const InputController = (props: Omit<ControllerProps, 'render'>) => {
  return (
    <Controller
      {...props}
      render={({ field, fieldState }) => (
        <Input {...field} error={fieldState.error?.message} />
      )}
    />
  )
}