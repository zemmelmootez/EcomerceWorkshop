import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { login, register, reset } from '../redux/slices/AuthSlice';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userData,setUser]=useState({})
  const dispatch=useDispatch()
  const {user,error,message,success}=useSelector(state=>state.authReducer)
  const navigate=useNavigate()

  useEffect(()=>{
    if(user)
    navigate("/me")
    if(error)
    {
      toast.error(error.message)
      dispatch(reset())
    }
  },[user,error])
  const addUser=(e)=>{
    e.preventDefault()


    dispatch(login(userData))
   
   

  }
  return (
    <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" required placeholder="Enter email" onChange={(e)=>setUser({...userData,email:e.target.value})} />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setUser({...userData,password:e.target.value})} />
      </Form.Group>
  
     
   
      <Button variant="primary" type="submit" onClick={addUser}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;