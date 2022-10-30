import React,{ useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../../context/AuthContext';

function CompleteProfile() {
    const {REACT_APP_BASE_BACKEND_URL} = process.env;
    const navigate = useNavigate();
    const { googleCompleteProfile, setGoogleCompleteProfile} = useContext(AuthContext);

    useEffect(() => {
        if(!googleCompleteProfile){
            toast.error("Unauthorized Access!", {
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
    }, [])

    const [payload, setpayload] = useState({
        "name":"",
        "email":"",
        "password":"",
        "mobileNumber":"",
        "gender":"",
        "college":""
    })

    const handleChange = (e) => {
        setpayload({...payload, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            let response = await fetch(`${REACT_APP_BASE_BACKEND_URL}/completeProfile`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"payload": payload})
            })
            let data = await response.json()
    
            if(response.status === 200){
                toast.success('successfully registered! Please Login In', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setGoogleCompleteProfile(false);    
                navigate("/");
            } else {
                toast.error(data.errorMessage, {
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
        }
    }

    return (
        <div className="register-form">
            <h1>Complete Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' value={payload.name} onChange={handleChange} placeholder="name" required={true}/>
                <br />
                <label htmlFor="mail">Email-ID : </label>
                <input type="email" name='email' value={payload.email} onChange={handleChange} placeholder="Email" required={true}/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' value={payload.password} onChange={handleChange} placeholder="password" required={true}/>
                <br />
                <label htmlFor="mobileNumber">Mobile Number : </label>
                <input type="" name='mobileNumber' value={payload.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required={true}/>
                <br />
                <span>Gender : </span>
                <input type="radio" id="html" name="gender" value="Male" onChange={handleChange} />
                <label htmlFor="html">Male </label>
                <input type="radio" id="css" name="gender" value="Female" onChange={handleChange} />
                <label htmlFor="css">Female</label>
                <br />
                <label htmlFor="college">College : </label>
                <input type="text" name='college' value={payload.college} onChange={handleChange} placeholder="college" required={true}/>
                <br />
                <input type="submit" value={"Done"} />
            </form>
        </div>
    )
}

export default CompleteProfile