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
        if (authTokens != null) {
            axios({
                method: 'get',
                url: `${REACT_APP_BASE_BACKEND_URL}/api/current_user/`,
                headers: {'Authorization': `Bearer ${authTokens.access}`}
            })
            .then((res) => {
                // console.log("details recieved", res)
                setUserInfo(res.data)
                // console.log("set user Info", res.data)
            })
            .catch((err) => {
                console.log(err)
            });
        }        
    }


    let loginUser = async (e )=> {
        e.preventDefault()
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
        }
        else {
            alert('Something went wrong!')
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setTokenInfo(null)
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
                setAuthTokens(data)
                setTokenInfo(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
                // console.log("tokens refreshed successfully")
            }
            else {
                logoutUser()
            }
        }
        catch (error) {
            console.log('error', error)
            logoutUser()
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

        // const fourMinutes = 1000 * 60 * 4
        let intervalTime = 1000 * 60 * 18

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, intervalTime)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
