import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPassword = useRef();
  const API_KEY = 'AIzaSyBonyHyJhs54jUzQiHya5lkEKZB8LsxYq4';
  const authContext = useContext(AuthContext);
  const idToken = authContext.token;

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPassword = newPassword.current.value;
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: idToken,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert('Password has been changed successfully');
      } else {
        alert('something went wrong try again later');
      }
    });
  };
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPassword} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button onClick={handleSubmit}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
