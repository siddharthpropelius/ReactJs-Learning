import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import { useState, useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  const [cartIndex, setCartIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    cart.map((item) => {
      setTotal(total + item.price);
      console.log(item.price);
    });
  };

  return (
    <>
      <Navbar
        cartIndex={cartIndex}
        setCartIndex={setCartIndex}
        setModal={setModal}
        modal={modal}
        handleTotal={handleTotal}
      />
      {modal && (
        <Modal setModal={setModal} modal={modal} cart={cart} total={total} />
      )}

      <Menu setCartIndex={setCartIndex} cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
