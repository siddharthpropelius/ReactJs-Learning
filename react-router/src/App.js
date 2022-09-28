import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/notFound';
import Item from './components/item';
import Login from './components/Login';
import AuthState from './components/context/authState';

function App() {
  return (
    <>
      <AuthState>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path=":itemId" element={<Item />} />
          </Routes>
        </div>
      </AuthState>
    </>
  );
}

export default App;
