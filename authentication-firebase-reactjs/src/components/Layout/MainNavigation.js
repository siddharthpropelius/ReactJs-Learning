import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const MainNavigation = () => {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;
  const navigate = useNavigate();
  console.log(isLoggedIn);

  const handleLogout = () => {
    authContext.logout('');
    navigate('auth');
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
