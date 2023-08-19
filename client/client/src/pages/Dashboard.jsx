import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Products from './Products'

function Dashboard() {

    const {user}=useSelector(state=>state.authReducer)
    const navigate=useNavigate()
    useEffect(()=>{

        if(!user)
        navigate("/register")
    },[])
  return (
    <div>
      <Products></Products>
    </div>
  )
}

export default Dashboard
