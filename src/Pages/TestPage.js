import React from 'react'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import useAxiosPrivate from '../utils/useAxiosPrivate'

const TestPage = () => {
    const [data, setData] = useState(null)
    const axiosPrivate = useAxiosPrivate();

    const handleClick = () => {
        axiosPrivate.get('/api/current_user/')
        .then((res)=> {
            console.log(res);
        })
        .catch((err) => {
            // console.error(err);
        })
    }

  return (
    <>
    <h1>TEST PAGE</h1>
    <br />
    <button onClick={handleClick}>CLICK</button>
    {data? JSON.stringify(data):<p>NoData</p>}
    </>
  )
}

export default TestPage