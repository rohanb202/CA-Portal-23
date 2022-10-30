import React, { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function RequireAuth({ children }) {
    const { userInfo } = useContext(AuthContext);
    if(!userInfo) {
        toast.error("You need to login to do that!", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
    }
    return userInfo
      ? children
      : <Navigate to="/ca/login"/>;
  }

export default RequireAuth