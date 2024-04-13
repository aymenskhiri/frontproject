import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (

        <div className='container'>
        <form action="">
        <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>


        </div>
        <div className="inputs">
        <div className="input">
            <input type='email' placeholder='Email' />
        </div>
        <div className="input">
            <input type='password' placeholder='Mot de passe' />
        </div>
        </div>
        <div className="submit-container">
            <button type='submit'>Login</button>
        </div>
        <div className="register-link">
        <p>Vous n'avez pas de compte ? <Link to="/signup">Inscription</Link></p>
        </div>
        </form>
    </div>
  )
}

export default Login
