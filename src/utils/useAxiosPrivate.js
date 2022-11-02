import  { axiosPrivate } from "./axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { toast } from 'react-toastify';

const useAxiosPrivate = () => {

    const { authTokens, clearTokens } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${authTokens?.access}`;
                }

                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if(error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
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
                    clearTokens();
                    navigate("/");
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }

    }, [authTokens])

    return axiosPrivate;
}

export default useAxiosPrivate