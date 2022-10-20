import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';

import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

// const { REACT_APP_BASE_BACKEND_URL } = process.env;
const REACT_APP_BASE_BACKEND_URL = "http://localhost:8000"


export const AuthProvider = ({children}) => {
    let navigate = useNavigate()
    
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access) : null)
    let [loading, setLoading] = useState(true)


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
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate("/")
        }
        else {
            alert('Something went wrong!')
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
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
                setUser(jwt_decode(data.access))
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
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4
        // let fourMinutes = 1000 * 3

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
