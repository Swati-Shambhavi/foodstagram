import React, { useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import style from '../scss/Authentication.module.scss';
import CartContext from '../store/cart-context';
import { FaEnvelope, FaLock } from 'react-icons/fa';
// import reactDom from 'react-dom';

const Authenticate = () => {
  const history = useHistory();
  const [isLogin, setisLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(CartContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = inputRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let url;
    setIsLoading(true);
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAR6BA-tZbJs_MQwE62wNQWwVa6C-lKrDg';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAR6BA-tZbJs_MQwE62wNQWwVa6C-lKrDg';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // if (data && data.error && data.error.message) {
            //
            // }

            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const switchAuthMode = () => {
    setisLogin((prevState) => !prevState);
  };
  return (
    <div className={style.authForm}>
      <div className={style['authForm__content']}>
        <h1 className={style['authForm__heading']}>
          {isLogin ? 'Login' : 'Signup'}
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className={style.formControl}>
            <span className={style.label}>
              <FaEnvelope className={style.icon} />
              <label htmlFor="email">Email</label>
            </span>
            <input required type="email" id="email" ref={inputRef} />
          </div>
          <div className={style.formControl}>
            <span className={style.label}>
              <FaLock className={style.icon} />
              <label htmlFor="password">Password</label>
            </span>
            <input required type="password" id="password" ref={passwordRef} />
          </div>
          <div className={style.formAction}>
            {!isLoading ? (
              <button className={style.loginBtn}>
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            ) : (
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '1.5rem',
                }}
              >
                Logging you in...
              </p>
            )}
            <button
              className={style.loginToggleBtn}
              type="button"
              onClick={switchAuthMode}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authenticate;
