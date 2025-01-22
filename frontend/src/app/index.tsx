import { Suspense, useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { Spinner } from 'react-bootstrap'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { queryConfig } from '@/lib/react-query'
export const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: queryConfig
  }))
  return (
    <Suspense fallback={
      <div className="flex vh-100 vw-100 align-items-center justify-content-center">
        <Spinner size='sm' />
      </div>
    }>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  )
}