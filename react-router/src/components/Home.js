import React, { useState, useContext } from 'react';
import data from './data';
import { useNavigate } from 'react-router';
import { authContext } from './context/authContext';
import Auth from './Auth';

const Home = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(authContext);
  console.log(auth);

  const handleOnClick = (id) => {
    navigate(`/${id}`);
  };
  console.log(data);
  const handleOnLogout = () => {
    localStorage.removeItem('isLoggedIn');
    //setAuth(false);
    // navigate('/login');
  };
  return (
    // <userContext.Provider value={name}>
    <div>
      <Auth />
      <button onClick={handleOnLogout}>Logout</button>
      {data.map((item) => {
        return (
          <div
            style={{
              width: '50px',
              backgroundColor: 'red',
              marginBottom: '10px',
            }}
            onClick={() => handleOnClick(item.id)}
            key={item.id}
          >
            {item.name}
          </div>
        );
      })}
    </div>
    // </userContext.Provider>
  );
};

export default Home;
