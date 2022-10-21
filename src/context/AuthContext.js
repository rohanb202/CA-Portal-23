import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';

import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext()

export default AuthContext;

// const { REACT_APP_BASE_BACKEND_URL } = process.env;
const REACT_APP_BASE_BACKEND_URL =  process.env.REACT_APP_BASE_BACKEND_URL || "http://localhost:8000"


export const AuthProvider = ({children}) => {
    let navigate = useNavigate()
    
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [tokenInfo, setTokenInfo] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access) : null)
    let [userInfo, setUserInfo] = useState(null)
    let [loading, setLoading] = useState(true)

    function setInfoFromTokens() {
        try{
            if (authTokens != null) {
                axios({
                    method: 'get',
                    url: `${REACT_APP_BASE_BACKEND_URL}/api/current_user/`,
                    headers: {'Authorization': `Bearer ${authTokens.access}`}
                })
                .then((res) => {
                    // console.log("details recieved", res)
                    toast.success('Details received', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    setUserInfo(res.data)
                    // console.log("set user Info", res.data)
                })
                .catch((err) => {
                    console.log(err)
                    toast.error('Some Error', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                });
            }    
        }
        catch(error){
            toast.error('Something went wrong!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            console.log('error', error)
        }
            
    }


    let loginUser = async (e )=> {
        e.preventDefault()
        try{
            let response = await fetch(`${REACT_APP_BASE_BACKEND_URL}/api/token/`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
            })
            let data = await response.json()
            // console.log(data)
    
            if(response.status === 200){
                setAuthTokens(data)
                setTokenInfo(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
                setInfoFromTokens()
                navigate("/")
                toast.success('Logged in successFully', {
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
            else {
                toast.error('Something went wrong!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                alert('Something went wrong!')
            }
        }
        catch(error){
            toast.error('Something went wrong!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            console.log('error', error)
        }
        
    }

    const clearTokens = () => {
        setAuthTokens(null)
        setTokenInfo(null)
        localStorage.removeItem('authTokens')
        setUserInfo(null)
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setTokenInfo(null)
        toast.success('Logged out successFully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        localStorage.removeItem('authTokens')
        setUserInfo(null)
        console.log("set user info null")
        navigate("/")

    }


    let updateToken = async ()=> {

        try{
            let response = await fetch(`${REACT_APP_BASE_BACKEND_URL}/api/token/refresh/`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'refresh':authTokens?.refresh})
            })

            let data = await response.json()
        
            if (response.status === 200){
                data["refresh"] = authTokens.refresh
                toast.success('Your session has been refreshed!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                setAuthTokens(data)
                setTokenInfo(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
                // console.log("tokens refreshed successfully")
            }
            else {
                // console.log("CALLING LOGOUT FROM UPDATETOKEN AS BAD RESPONSE")
                // logoutUser()
                clearTokens();
            }
        }
        catch (error) {
            toast.error('Something went wrong! Please try again later.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            // console.log('error', error)
            // console.log("CALLING LOGOUT FROM UPDATETOKEN AS FETCH FAILED")
            clearTokens()
        }   

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        tokenInfo:tokenInfo,
        authTokens:authTokens,
        userInfo:userInfo,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(loading){
            updateToken()
            setInfoFromTokens()
        }
        else {            
                    // const fourMinutes = 1000 * 60 * 4
                    let intervalTime = 1000 * 60 * 18
            
                    let interval =  setInterval(()=> {
                        if(authTokens){
                            updateToken()
                        }
                    }, intervalTime)
                    return ()=> clearInterval(interval)
        }

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
