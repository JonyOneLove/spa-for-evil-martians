import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import ErrorPage from '../pages/ErrorPage'
import Signup from '../pages/Auth/Signup'
import SignIn from '../pages/Auth/SignIn'
import ProtoctedRoutes from '../hooks/ProtoctedRoutes'

const Home = lazy(() => import('../pages/Home/Home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtoctedRoutes>
            <Home />
          </ProtoctedRoutes>
        ),
      },
    ],
  },
  {
    path: '/register',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
])
