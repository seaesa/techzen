import { MainLayout } from '@/components/layouts/main'
import { Input, InputController } from '@/components/ui/input/input'
import { Dialog } from '@/components/ui/modals/modal'
import { Notification } from '@/components/ui/notification/notification'
import { Table } from '@/components/ui/table/table'
import { api } from '@/lib/api-client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { Eye, Trash } from 'react-bootstrap-icons'
import { Controller, useForm } from 'react-hook-form'
import * as  yup from 'yup';
yup.setLocale({
  mixed: {
    required: () => 'trường này là bắt buộc'
  }
})
interface Transactions {
  id: string,
  transaction_id: string,
  service_date: Date,
  price: number,
  acreage: number,
  user_id: string,
  service_type_id: string
  user: User
}
interface User {
  id: string,
  name: string,
  email: string,
  phone: string
}
const transactionSchema = yup.object({
  transaction_id: yup.string().required().default(''),
  service_type_id: yup.string().required().default(''),
  service_date: yup.date().required().default(new Date()),
  price: yup.number().min(500).required().default(0),
  acreage: yup.number().min(20).required().default(0),
  user_id: yup.string().required().default('')
})
export const Transactions = () => {
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(transactionSchema)
  })
  const { data: transactions, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => api.get<Transactions[]>(`/transactions`),

  })
  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: () => api.get<any[]>('/services')
  })
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: () => api.get<any[]>('/users')
  })
  const columns = useMemo(() => [
    {
      accessorKey: 'transaction_id',
      header: 'Mã Giao dịch'
    },
    {
      accessorKey: 'service_type_id',
      header: 'Loại dịch vụ'
    },
    {
      accessorKey: 'service_date',
      header: 'Ngày Giao dịch',
    },
    {
      accessorKey: 'price',
      header: 'Đơn Giá'
    },
    {
      accessorKey: 'acreage',
      header: 'Diện Tích (VND/m2)'
    },
    {
      accessorKey: 'user.name',
      header: 'Tên Khách Hàng'
    },
    {
      accessorKey: 'user.phone',
      header: 'Số Điện Thoại'
    },
    {
      accessorKey: 'user.email',
      header: 'Email'
    },
    {
      id: 'actions',
      cell: () => {
        return (
          <>
            <div className='d-flex gap-2'>
              <Button>
                <Eye />
              </Button>
              <Button variant='danger'>
                <Trash />
              </Button>
            </div>
          </>
        )
      }
    },
  ] as ColumnDef<Transactions>[], [])
  const handleAddTransactions = async (data: yup.InferType<typeof transactionSchema>) => {
    const transaction = await api.post('/transaction', data)
    if (transaction) {
      setShowModal(false)
      setNotification(true)
      refetch()
      reset()
    }
  }
  return (
    <>
      <MainLayout>
        <div className="container min-vh-100 my-5">
          <h2 className='text-center'>Quản Lý Giao Dịch Nhà Và Đất</h2>
          <div className='d-flex justify-content-between align-items-center'>
            <Button onClick={() => setShowModal(true)}>Thêm Mới</Button>
            <div className='d-flex gap-4 align-items-center mb-2'>
              <Input className='m-0' />
              <div className='d-flex mt-auto h-100 w-50'>
                <Form.Select>
                  {(services?.data as any)?.data?.length > 0 && (services?.data as any)?.data.map((service: any) => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                  ))}
                </Form.Select>
              </div>
            </div>
          </div>
          <Table
            data={(transactions?.data as any)?.data || []}
            columns={columns} />
        </div>
      </MainLayout>
      <Dialog
        title='Thêm mới giao dịch'
        show={showModal} onClose={() => setShowModal(false)}>
        <Form onSubmit={handleSubmit(handleAddTransactions)}>
          <Stack className='mb-4 gap-2'>
            <InputController controller={{ control, name: 'transaction_id' }} label='Mã giao dịch' />
            <Controller
              control={control}
              name='service_type_id'
              render={({ field }) => (
                <Form.Select {...field}>
                  {(services?.data as any)?.data?.length > 0 && (services?.data as any)?.data.map((service: any) => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                  ))}
                </Form.Select>

              )}
            />
            {/* <InputController controller={{ control, name: 'service_type_id' }} label='Loại dịch vụ' /> */}
            <InputController controller={{ control, name: 'service_date' }} label='Ngày giao dịch' type='date' />
            <InputController controller={{ control, name: 'price' }} label='Đơn giá' />
            <InputController controller={{ control, name: 'acreage' }} label='Diện tích' />
            <Controller
              control={control}
              name='user_id'
              render={({ field }) => (
                <Form.Select {...field} >
                  {(users?.data as any)?.data?.length > 0 && (users?.data as any)?.data.map((user: any) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                  ))}
                </Form.Select>
              )} />
          </Stack>
          <div className='d-flex flex-row ms-auto gap-2 w-100 justify-content-end'>
            <Button
              onClick={() => setShowModal(false)}
              variant='secondary'>Đóng</Button>
            <Button type='submit'>Thêm mới</Button>
          </div>
        </Form>
      </Dialog>
      <Notification header='Thêm mới thành công' show={notification} autohide delay={3000} onClose={() => setNotification(false)} >
        Đã Thêm mới giao dịch
      </Notification>
    </>
  )
}