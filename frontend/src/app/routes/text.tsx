import { MainLayout } from '@/components/layouts/main'
import { Table } from '@/components/ui/table/table'
import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import axios from 'axios'
import { useMemo } from 'react'
export const Test = () => {
  const { data } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
  })
  const columns = useMemo(() => {
    return [
      {
        accessorKey: 'name',
      },
      {
        accessorKey: 'url'
      }
    ] as ColumnDef<any>[]
  }, [])
  return (
    <MainLayout>
      <div className='container min-vh-100'>
        <Table data={data?.data.results || []} columns={columns} />
      </div>
    </MainLayout>
  )
} 