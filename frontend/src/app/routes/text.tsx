import { MainLayout } from '@/components/layouts/main'
import { Table } from '@/components/ui/table/table'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'

export const Test = () => {
  const columns = useMemo(() => [
    {
      accessorKey: 'id'
    }
  ] as ColumnDef<any>[], [])
  return (
    <MainLayout>
      <div className='container'>
        <Table columns={columns} data={[]} />
      </div>
    </MainLayout>
  )
} 