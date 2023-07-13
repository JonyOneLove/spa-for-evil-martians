import { Navigate, Outlet } from 'react-router-dom'

const ProtoctedRoutes = ({ children }) => {
  const isAuth = localStorage.getItem('access_token')
  if (!isAuth) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default ProtoctedRoutes
