import React from 'react';
import data from './data';
import '../styles/menu.css';

const Menu = ({ setCartIndex, cart, setCart }) => {
  const handleCart = (id) => {
    data.map((item)=>{
      if (item.id === id) {
        setCart([...cart, item]);
        setCartIndex(cart.length + 1);
      }
    });
  };
  return (
    <div className="container_menu">
      {data.map((item) => {
        return (
          <>
            <div className="wrapper_menu" key={item.id}>
              <img src={item.image} alt="food" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => handleCart(item.id)}>Add to Cart</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
