import {
  BrowserRouter,
  Route,
  Routes as RoutesDom
} from "react-router-dom"
import { NavBar } from "../components/NavBar"

import { useUser } from "../hooks/useUser"
import { Client } from "../pages/Client"
import { CreateClient } from "../pages/Client/CreateClient"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Order } from "../pages/Order"

function Routes () {
  const { user } = useUser()

  if (!user) {
    return (<BrowserRouter>
      <RoutesDom>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </RoutesDom>
    </BrowserRouter>)
  }

  return (<BrowserRouter>
    <NavBar />
    <RoutesDom>
      <Route path="/" element={<Dashboard />} />
      <Route path="/order" element={<Order />} />
      <Route path="/client" element={<Client />} />
      <Route path="/client/:clientId/edit" element={<CreateClient />} />
      <Route path="/client/:clientId/view" element={<CreateClient />} />
      <Route path="/client/create" element={<CreateClient />} />
      <Route path="*" element={<Dashboard />} />
    </RoutesDom>
  </BrowserRouter>)
}

export { Routes }
