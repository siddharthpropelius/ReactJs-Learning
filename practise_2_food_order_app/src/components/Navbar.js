import React, { useState } from 'react';
import '../styles/navbar.css';
import Modal from './Modal';

const Navbar = ({ cartIndex, setModal, modal, handleTotal }) => {
  const handleSubmit = () => {
    setModal(!modal);
    handleTotal();
  };
  return (
    <>
      <div className="container">
        <h1>ReactMeals</h1>
        <button onClick={handleSubmit}>View Cart ({cartIndex})</button>
      </div>
    </>
  );
};

export default Navbar;
