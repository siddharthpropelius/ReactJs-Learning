import { useState, useRef, useContext } from 'react';
import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const API_KEY = 'AIzaSyBonyHyJhs54jUzQiHya5lkEKZB8LsxYq4';
  const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
  const SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    if (isLogin) {
      fetch(SIGNIN_URL, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((res) => {
        if (res.ok) {
          // alert('success');
          return res.json().then((data) => {
            const expirationTime = new Date(
              new Date().getTime() + (+data.expiresIn * 1000)
            );
            authContext.login(data.idToken,expirationTime.toISOString());
            console.log(authContext.isLoggedIn);
            navigate('/');
          });
        } else {
          //console.log(res)
          alert('email or password is wrong');
        }
      });
    } else {
      fetch(SIGNUP_URL, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            authContext.login(data.idToken);
            //    console.log(authContext.isLoggedIn);
            navigate('/');
          });
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
          });
        }
      });
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={email} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={password} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
