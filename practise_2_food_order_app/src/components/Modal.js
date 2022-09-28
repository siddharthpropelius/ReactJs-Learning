import React, { useEffect, useState } from 'react';

const Modal = ({ setModal, modal, cart, total }) => {
  return (
    <div
      style={{ maxWidth: '80%', margin: 'auto', display: 'flex', gap: '10px' }}
    >
      {cart.map((item) => {
        return (
          <>
            <div>
              <img
                src={item.image}
                alt="food_image"
                style={{ width: '300px', height: '200px' }}
              />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button>Remove</button>
            </div>
          </>
        );
      })}

      <div style={{ flex: 'none' }}>Total Price:{total}</div>
    </div>
  );
};

export default Modal;
