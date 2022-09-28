import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from './context/authContext';

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(authContext);
  const handleOnLogin = () => {
    localStorage.setItem('isLoggedIn', true);
    navigate('/home');
    setAuth(true);
  };
  return (
    <div>
      Login
      <h2>Hello $ again!</h2>
      <button onClick={handleOnLogin}>login</button>
    </div>
  );
};

export default Login;
