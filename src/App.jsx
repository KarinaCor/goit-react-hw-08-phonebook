import { lazy, useEffect } from "react"
import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { refreshThunk } from "redux/auth/authOperation"
import * as ROUTES from '../src/constants/routes'
import RestrictRoute from "components/RestrictedRoute"
import PrivateRoute from "components/PrivateRoute"
import Layout from "components/Layout/Layout"
import { selectAuthenticated } from "redux/auth/auth.selector"





const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: <RestrictRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
      <LoginPage/>
      </RestrictRoute>,
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: <RestrictRoute navigateTo={ROUTES.HOME_ROUTE}>
   <RegisterPage/>
    </RestrictRoute>,
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element:
    <PrivateRoute>
    <ContactsPage/>
    </PrivateRoute>
    
  }
]


export const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectAuthenticated)

  useEffect(() => {
    if (!token) return;
    dispatch(refreshThunk())
  },[dispatch,token])
  return(
    <>
  
    <Layout>
      <Suspense>
        <Routes>
         {appRoutes.map(({path,element}) => <Route key = {path} path = {path} element = {element}/>
         )}
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </Suspense>
    </Layout>
    </>
  
  )
}


