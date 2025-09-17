import { createRoot } from 'react-dom/client'
import './index.css'
import './fonts/fonts.css'
import App from './App.tsx'
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: () => {
    return <Outlet />
  },
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <App />,
})

const routeTree = rootRoute.addChildren([indexRoute])

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
