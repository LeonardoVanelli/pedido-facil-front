import "bootstrap/dist/css/bootstrap.css"
import "react-toastify/dist/ReactToastify.css"
import "react-alert-confirm/lib/style.css"
import { ToastContainer } from "react-toastify"

import { Providers } from "./context"
import { Routes } from "./routes"
import { GlobalStyle } from "./styles/global"

function App () {
  return (
    <div>
      <Providers>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </Providers>
    </div>
  )
}

export { App }
