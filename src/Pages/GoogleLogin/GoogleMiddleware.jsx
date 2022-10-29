import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode";

function GoogleMiddleware() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { setAuthTokens, setGoogleCompleteProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {REACT_APP_BASE_BACKEND_URL} = process.env;
    let code = searchParams.get("code")

    const getTokens = async(auth_code) => {
            
        try{
            let response = await fetch(`${REACT_APP_BASE_BACKEND_URL}/api/google/callback/`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"auth_code": auth_code})
            })
            // console.log(response)
            let data = await response.json()
    
            if(response.status === 200){
                setAuthTokens(data)
                localStorage.setItem('authTokens', JSON.stringify(data))
                toast.success('Logged in successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/")
            }
            // else if (response.status === 201) {
            //     setAuthTokens(data)
            //     localStorage.setItem('authTokens', JSON.stringify(data))
            //     setGoogleCompleteProfile(true)
            //     navigate("/complet-profile")
            // }
            else if (response.status === 404) {
                toast.error('User does not exist! Please create your account first!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate("/")
            }
            else {
                // console.log("not 200 error")
                toast.error('Something Went Wrong here! Please Try again', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate("/")
            }
        }
        catch(error){
            // console.log("catch error")
            console.error(error)
            toast.error('Server Error! Try again later.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            navigate("/");
        }
    
    }

    useEffect(() => {
        // console.log("HELLO USE EFFECT!")
        getTokens(code);
    }, [])
  return (
    <div>Please wait. We are logging you in......</div>
  )
}

export default GoogleMiddleware