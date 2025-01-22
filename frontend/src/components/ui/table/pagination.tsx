import { useState } from 'react'
import { Pagination as P } from 'react-bootstrap'

interface PaginationProps {
  total?: number,
  defaultValue?: number,
  value?: number,
  onChange?: (value: number) => void,
}
export const Pagination: React.FC<PaginationProps> = ({ total = 1, defaultValue, value, onChange }) => {
  let [active, setActive] = useState(value || defaultValue || 1)
  return (
    <P className='d-flex justify-content-center mt-3'>
      <P.Prev disabled={active <= 1} onClick={() => {
        const prevAction = active - 1
        setActive(prevAction)
        onChange?.(prevAction)
      }} />
      {Array.from({ length: total }, (_, i) => i + 1).map((number) => (
        <P.Item
          data-value={number}
          onClick={(e) => {
            const value = Number(e.currentTarget.dataset.value)
            onChange?.(value)
            setActive(value)
          }}
          key={number}
          active={active === number}
        >
          {number}
        </P.Item>
      ))}
      <P.Next disabled={active >= total} onClick={() => {
        const nextAction = active + 1
        setActive(nextAction)
        onChange?.(nextAction)
      }} />
    </P>
  )
}