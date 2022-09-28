import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from './context/authContext';
import Home from './Home';
import Login from './Login';

const Auth = () => {
  const navigate = useNavigate();
  const auth = useContext(authContext);
  useEffect(() => {
    console.log(auth.auth);
    if (auth.auth === false) {
      navigate('/login');
    } else {
      navigate('/');
    }
  });
};

export default Auth;
