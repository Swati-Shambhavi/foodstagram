import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <form action="#">
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
