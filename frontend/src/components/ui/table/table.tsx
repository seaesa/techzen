import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, PaginationState, useReactTable } from '@tanstack/react-table'
import { Pagination } from './pagination'
import { useState } from 'react';

interface TableProps<T, D> extends React.TableHTMLAttributes<T> {
  data: T[],
  columns: ColumnDef<T, D>[],
  paginations?: {
    pageCount: number,
  }
}
export function Table<T, D>({ data, columns, paginations }: TableProps<T, D>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    state: {
      pagination
    },
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    manualPagination: true,
    rowCount: data.length,
    pageCount: paginations?.pageCount
  })
  return (
    <>
      <div className='border px-2'>
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
              table.getRowModel()?.rows?.length ?
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
                    <td className='text-center' colSpan={columns?.length}>không có dữ liệu</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
      <Pagination
        total={table.getPageCount()}
        value={table.getState().pagination.pageIndex + 1}
        onChange={(value) => {
          table.setPageIndex(value - 1);
        }}
      />
    </>
  )
}