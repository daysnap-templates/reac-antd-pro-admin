import { RouteObject, useRoutes } from 'react-router-dom'
import Layout from '@/layout'
import HomePage from '@/pages/Home'
import LoginPage from '@/pages/Login'
import NotFoundPage from '@/pages/404'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export function Routes() {
  return useRoutes(routes as any)
}
