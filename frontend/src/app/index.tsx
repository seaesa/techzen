import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { Spinner } from 'react-bootstrap'
export const App = () => {
  return (
    <Suspense fallback={
      <div className="flex vh-100 vw-100 align-items-center justify-content-center">
        <Spinner size='sm' />
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  )
}