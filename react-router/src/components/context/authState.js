import React, { useState } from 'react';
import { authContext } from './authContext';

const AuthState = (props) => {
  const [auth, setAuth] = useState(false);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
