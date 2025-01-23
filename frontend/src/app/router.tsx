import { MainErrorFallback } from '@/components/errors/main';
import { paths } from '@/config/paths';
import { createBrowserRouter } from "react-router";
import { HomePage } from './routes/home/home';
import { Transactions } from './routes/transactions/transactions';

export let router = createBrowserRouter([
  {
    path: paths.home.path,
    Component: HomePage,
    ErrorBoundary: MainErrorFallback,
  },
  {
    path: paths.transactions.path,
    Component: Transactions
  }
]);