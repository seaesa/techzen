import { Form, FormControlProps } from 'react-bootstrap'
import classes from './input.module.scss';
import { cn } from '@/utils/cn';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
interface InputProps extends FormControlProps {
  label?: string,
  error?: boolean | string
}
export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <Form.Group>
      <Form.Label className='mb-1'>{label}</Form.Label>
      <Form.Control
        {...props}
        isInvalid={!!error}
      />
      {error && <p className={cn('text-danger', classes.inputLabel)}>{error}</p>}
    </Form.Group>
  )
}
interface InputControllerProps<T extends FieldValues> extends InputProps {
  controller: Omit<ControllerProps<T>, 'render'>
}
export const InputController = <T extends FieldValues,>({ controller, ...props }: InputControllerProps<T>) => {
  return (
    <Controller
      {...controller}
      render={({ field, fieldState }) => (
        <Input {...field} error={fieldState.error?.message} {...props} />
      )}
    />
  )
}