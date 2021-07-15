import React from 'react';
import style from '../scss/Login.module.scss';

const LoginPage = () => {
  return (
    <div className={style.login}>
      <form>
        <div className="form__control">
          <label htmlFor="username">Enter your name</label>
          <input type="text" id="username" />
        </div>
        <div className="form__control">
          <label htmlFor="password">Enter your password</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
