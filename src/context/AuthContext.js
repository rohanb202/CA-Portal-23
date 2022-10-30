import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';

// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext()

export default AuthContext;

// const { REACT_APP_BASE_BACKEND_URL } = process.env;
const REACT_APP_BASE_BACKEND_URL =  process.env.REACT_APP_BASE_BACKEND_URL || "http://localhost:8000"


export const AuthProvider = ({children}) => {
    let navigate = useNavigate()
    
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [userInfo, setUserInfo] = useState(null)
    let [loading, setLoading] = useState(true)
    // let [googleCompleteProfile, setGoogleCompleteProfile] = useState(false)


    let setInfoFromToken = async(access_token) =>{
        try{
        let response = await axios({
            method: 'get',
            url: `${REACT_APP_BASE_BACKEND_URL}/api/current_user/`,
            headers: {'Authorization': `Bearer ${access_token}`}
        });

        if (response.status == 200) {
            // console.log("got data!")
            setUserInfo(response.data)
            toast.success(`Welcome ${response.data.full_name}!`, {
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
            // console.log("didnt get 200 userdata")
            toast.error('Something went wrong while fetching user data!', {
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
        }
        catch(e) {
            console.error("setuserinfoerror", e);
        }
            
    }


    let loginUser = async (email, password)=> {
        try{
            let response = await fetch(`${REACT_APP_BASE_BACKEND_URL}/api/token/`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'email':email, 'password':password})
            })
            let data = await response.json()
            // console.log(data)
    
            if(response.status === 200){
                setAuthTokens(data)
                localStorage.setItem('authTokens', JSON.stringify(data))

                navigate("/ca")

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
            }
            else if (response.status == 401) {
                toast.error('Login failed! Please check your credentials, or activate your account from email if not done!', {
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
            }
        }
        catch(error){
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
            // console.log('error', error)
        }
        
    }

    const clearTokens = () => {
        setAuthTokens(null)
        localStorage.removeItem('authTokens')
        setUserInfo(null)
        // console.log("cleared tokens!")
    }

    let logoutUser = () => {
        clearTokens()
        toast.success('Logged out!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigate("/ca")

    }

    let refreshTokens = async() => {
        try {
            const response = await axios.post(`${REACT_APP_BASE_BACKEND_URL}/api/token/refresh/`, {
                refresh: authTokens?.refresh
              });
         
            if(response.status == 200) {
                let tokens = response.data
                tokens["refresh"] = authTokens.refresh
                localStorage.setItem('authTokens', JSON.stringify(tokens))

                // session refreshed
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

                setAuthTokens(response.data)


            }
            else if(response.status == 401) {
                clearTokens()
                
                // your session has expired! Please login again.
                toast.error('Your session has expired! Please login again!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

                navigate("/ca")
            }
            else {
                clearTokens()
                // something went wrong. try again later!
                toast.error('Something went wrong! please login again!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

                navigate("/ca/login")
            }
        }
        catch (error) {
            clearTokens()

            // your session has expired, please login again!
            toast.error('Your session has expired! Please login again.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            navigate("/ca/login")
        }
    }


    useEffect(()=> {  
        if(loading) {
            // will be executed on first try only
            if(authTokens) {
                refreshTokens();           
            }
        setLoading(false)
        }

        else {
            // does not run on first load
            if(authTokens){            
                if(!userInfo){
                    setInfoFromToken(authTokens.access);
                }
            }
        }

    }, [authTokens])

    function testContext() {
        console.log("HELLO FROM CONTEXT!");
    }

    let contextData = {
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        userInfo:userInfo,
        loginUser:loginUser,
        logoutUser:logoutUser,
        clearTokens: clearTokens,
        // googleCompleteProfile:googleCompleteProfile,
        // setGoogleCompleteProfile:setGoogleCompleteProfile,
        testContext: testContext,
    }



    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
