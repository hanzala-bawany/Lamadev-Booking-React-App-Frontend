import { useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AuthRoute = () => {

  const user = JSON.parse(localStorage.getItem("loginUser"))

  useEffect(() => {
    if (user) toast.warning("Already you are loged in")
  },[user])


  return (
    <>
      {
        user ? <Navigate to="/" /> : <Outlet />
      }
    </>

  )
}

export default AuthRoute