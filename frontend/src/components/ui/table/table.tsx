import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface TableProps<T, D> extends React.TableHTMLAttributes<T> {
  data: T[],
  columns: ColumnDef<T, D>[]
}
export function Table<T, D>({ data, columns }: TableProps<T, D>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          {table.getHeaderGroups()?.map((headers) => (
            <tr key={headers.id}>
              {
                headers.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))
              }
            </tr>
          ))}
        </thead>
        <tbody>
          {
            table.getRowModel().rows.length ?
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getAllCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
              : (
                <tr>
                  <td className='text-center' colSpan={columns.length}>không có dữ liệu</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}