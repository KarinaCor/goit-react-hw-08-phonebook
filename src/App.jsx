import { lazy, useEffect } from "react"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { useDispatch } from "react-redux"
import { refreshThunk } from "redux/auth/authOperation"
import * as ROUTES from '../src/constants/routes'
import RestrictRoute from "components/RestrictedRoute"
import PrivateRoute from "components/PrivateRoute"
import Layout from "components/Layout/Layout"



const LoginPage = lazy(() => import('pages/LoginPage'))
const RegisterPage = lazy(() => import('pages/RegisterPage'))
const ContactsPage = lazy(() => import('pages/ContactsPage'))

const AppRoutes = [
  {
    path: ROUTES.LOGIN_ROUTE,
    element: <RestrictRoute>
      <LoginPage/>
      </RestrictRoute>,
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: <RestrictRoute>
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

  useEffect(() => {
    dispatch(refreshThunk())
  },[dispatch])
  return(
    <Layout>
      <Suspense>
        <Routes>
         {AppRoutes.map(({path,element}) => {
          <Route key = {path} path = {path} element = {element}/>
         })}
        </Routes>
      </Suspense>
    </Layout>
  )
}

 