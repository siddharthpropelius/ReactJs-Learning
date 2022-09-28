import React from 'react'
import {useDispatch } from 'react-redux'
import { authActions } from '../redux/reducers/authSlice';
import { useState } from 'react';



const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch= useDispatch();
    const handleOnSubmit=(e)=>{
       e.preventDefault();
        dispatch(authActions.login());
    }
  return (
    <div>
      <div>
        <h2>Login Here</h2>
        <div>
          <form>
            <input  type="email" placeholder="email" autoComplete='false' onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input  type="password" placeholder="password" autoComplete='false' onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button onClick={handleOnSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
