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
    let [tokenInfo, setTokenInfo] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access) : null)
    let [userInfo, setUserInfo] = useState(null)
    let [loading, setLoading] = useState(true)

    // myaxios automatically attaches authToken to Authorization header, and also handles token refreshing if expired.
    // let myAxios = useAxios()


    let setInfoFromToken = async(access_token) =>{

        // let response = await axios.get('/api/current_user/')
        let response = await axios({
            method: 'get',
            url: `${REACT_APP_BASE_BACKEND_URL}/api/current_user/`,
            headers: {'Authorization': `Bearer ${access_token}`}
        });

        if (response.status == 200) {
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

                setInfoFromToken(data.access)
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
        setTokenInfo(null)
        localStorage.removeItem('authTokens')
        setUserInfo(null)
    }

    let logoutUser = () => {
        clearTokens()
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
        navigate("/")

    }

    let contextData = {
        tokenInfo:tokenInfo,
        setTokenInfo: setTokenInfo,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        userInfo:userInfo,
        loginUser:loginUser,
        logoutUser:logoutUser,
        clearTokens: clearTokens,
    }

    let refreshTokens = async() => {
        try {
            console.log("making refresh api request")
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

                if(!userInfo) {
                    setInfoFromToken(response.data.access)
                }
            }
            else if(response.status == 401) {
                clearTokens()

                // your session has expired! Please login again.
                toast.error('Your session has expired! please login again!', {
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

                navigate("/login1")
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

            navigate("/login1")
        }
    }

    useEffect(()=> {  
        if(loading) {
            // will be executed on first try only
            // toast.success('This is the first load!', {
            //     position: "top-center",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     });
            if(authTokens) {
                refreshTokens();           
            }
        setLoading(false)
        }

        if(authTokens){            
            setTokenInfo(jwt_decode(authTokens.access))
        }

    }, [authTokens, loading])


    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
