import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import Logo from './Logo.jsx';
// import * as duckAuth from '../duckAuth.jsx';


const Register = () => {
  const [data, setData] = useState( {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, email, password, confirmPassword } = data;
//     if (password === confirmPassword){
//       duckAuth.register(username, password, email).then((res) => {
//         if(res.statusCode !== 400){
//           setMessage('');
//           history.push('/login');
//         } else {
//           setMessage('Что-то пошло не так!')
//         }
//       });
//     }
//   }

  return(
    <section className="register">
            <form className="register__form">
      <h1 className="register__welcome">Вход</h1>
        <input className="register__input" id="email" name="email" type="email"  />
        <input className="register__input" id="password" name="password" type="password"  />
          <button type="submit" className="register__link">Зарегистрироваться</button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="register__login-link">Войти</Link>
      </div>
    </section>
  )
}

export default Register;
