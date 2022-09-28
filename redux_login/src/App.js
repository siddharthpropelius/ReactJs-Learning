import { useSelector } from 'react-redux';
import Login from './components/Login';
import HomePage from './components/HomePage';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return <div>
    {!isLoggedIn ? <Login/>: <HomePage/>}
  </div>;
}

export default App;
