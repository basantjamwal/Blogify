import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const handleLogout = () => { 
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold 
                 shadow-md hover:bg-red-600 active:bg-red-900 
                 transition-all duration-200"
    >
      Logout
    </button>
  )
}

export default LogoutBtn
