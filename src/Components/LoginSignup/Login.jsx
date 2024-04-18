import React, { useState } from 'react'
import axios from 'axios';
import './LoginSignup.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // test a get request
    const testGetRequest = () => {
        fetch('https://localhost:7247/WeatherForecast', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };
    // post request to login
    const submitLogin = async (event) => {
        event.preventDefault(); 
        try {
            const response = await axios.post('https://localhost:7247/api/User/login', {
                email: email,
                password: password
            });
    
            console.log(response.data); 
        } catch (error) {
            console.error('Error occurred:', error.response.data); 
        }
    };
    return (

        <div className='container'>
            <form onSubmit={submitLogin}>
                <div className='header'>
                    <div className='text'>Login</div>
                    <div className='underline'></div>


                </div>
                <div className="inputs">
                    <div className="input">
                        <input type='email' placeholder='Email' value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <input type='password' placeholder='Mot de passe' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                {error && <div className='error'>{error}</div>}
                <div className="submit-container">
                    <button type='submit'>Login</button>
                </div>
                <div className="register-link">
                    <p>Vous n'avez pas de compte ? <Link to="/signup">Inscription</Link></p>
                </div>
            </form>
            <button onClick={testGetRequest} >Test Get Request</button>
        </div>
    )
}

export default Login
