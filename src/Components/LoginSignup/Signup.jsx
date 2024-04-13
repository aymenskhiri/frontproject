import React from 'react'
import './LoginSignup.css'



const Signup = () => {
  return (
    <div className='container'>
           <form action="">
        <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>


        </div>
        <div className="inputs">
        <div className="input">
            <input type='email' placeholder='Email' />
        </div>
        <div className="input">
            <input type='password' placeholder='Mot de passe' />
        </div>
        <div className="input">
            <input type='text' placeholder='Nom' />
        </div>
        <div className="input">
            <input type='text' placeholder='Prénom' />
        </div>
        <div className="input">
            <input type='text' placeholder='Adresse' />
        </div>
        <div className="input">
            <input type='int' placeholder='Téléphone' />
        </div>
        </div>
        <div className="submit-container">
            <button type='submit'>Sign Up</button>
        </div>
        </form>
    </div>
  )
}

export default Signup

