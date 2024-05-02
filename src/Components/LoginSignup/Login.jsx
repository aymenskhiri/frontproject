import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';
import { Link } from 'react-router-dom';
import User from "../../Models/User"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user,setUser] = useState(new User());

    const submitLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://localhost:7247/api/User/login', {
                email: email,
                password: password
            });

            console.log(response.data);
            setUser(response.data);
    
            if (response.data.Role == "Professeur") {
                console.log("its a professor");
                
                window.location.href = '/reservation-list';
            } else if (response.data.Role === "Admin") {
                console.log("its an Admin");
               
                window.location.href = '/SalleListPage';
            }
           
        } catch (error) {
            setError('Une erreur s\'est produite lors de la connexion.');
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
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type='password'
                            placeholder='Mot de passe'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
        </div>
    );
};

export default Login;
