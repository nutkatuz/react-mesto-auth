import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setToken } from '../utils/token';
// import * as duckAuth from '../duckAuth.jsx';

const Login = () => {

  return (
    <section className="register">
      <form className="register__form">
      <h1 className="register__welcome">Вход</h1>
        <input className="register__input" id="email" name="email" type="email"  />
        <input className="register__input" id="password" name="password" type="password"  />
          <button type="submit" className="register__link">Зарегистрироваться</button>
      </form>
      <div className="register__signin">
        <p>Ещё не зарегистрированы?</p>
        <Link to="sign-up" className="register__login-link">Регистрация</Link>
      </div>
    </section>

  )
}

export default Login;
//скопировала из регистер