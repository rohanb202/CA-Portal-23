import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const baseURL = process.env.REACT_APP_BASE_BACKEND_URL || "http://localhost:8000"


const useAxios = () => {

    let navigate = useNavigate()
    const controller = new AbortController();

    const {authTokens, setAuthTokens, clearTokens} = useContext(AuthContext)

    const axiosInstance = axios.create({
        baseURL,
        headers:{Authorization: `Bearer ${authTokens?.access}`},
        signal: controller.signal
    });


    axiosInstance.interceptors.request.use(async req => {

        console.log("interceptor run")
    
        const user = jwt_decode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    
        if(!isExpired) return req
        
        try {
            console.log("making refresh api request")
            const response = await axios.post(`${baseURL}/api/token/refresh/`, {
                refresh: authTokens.refresh
              });
         
            if(response.status == 200) {
                localStorage.setItem('authTokens', JSON.stringify(response.data))

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
                
                req.headers.Authorization = `Bearer ${response.data.access}`
                return req
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

                // cancel the request which requires auth and redirect
                controller.abort()
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

                // cancel the request which requires auth and redirect
                controller.abort()
                navigate("/login")
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

            // cancel the request which requires auth and redirect
            controller.abort()
            navigate("/login")
        }

    })
    
    return axiosInstance
}

export default useAxios;