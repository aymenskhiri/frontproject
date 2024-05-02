import React, { useState } from 'react'
import './LoginSignup.css'
import axios from 'axios';



const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setnom] = useState('');
    const [prenom, setprenom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [tel, setTel] = useState('');
    const [error, setError] = useState('');
    const [Specialite, setSpecialite] = useState('');
    const [Matiere, setMatiere] = useState('');

    // post request to signup
    const submitSignup = async (event) => {
        event.preventDefault(); 
        try {
            const response = await axios.post('https://localhost:7247/api/User/add-user', {
                email: email,
                password: password,
                nom: nom,
                prenom: prenom,
                adresse: adresse,
                tel: tel,
                Specialite : Specialite,
                Matiere : Matiere
            });
    
            console.log(response.data); 
        } catch (error) {
            console.error('Error occurred:', error.response.data); 
        }
    };

  return (
    <div className='container'>
           <form onSubmit={submitSignup}>
        <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>


        </div>
        <div className="inputs">
        <div className="input">
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
            <input type='password' placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="input">
            <input type='text' placeholder='Nom' value={nom} onChange={(e) => setnom(e.target.value)}/>
        </div>
        <div className="input">
            <input type='text' placeholder='Prénom'  value={prenom} onChange={(e) => setprenom(e.target.value)}/>
        </div>
        <div className="input">
            <input type='text' placeholder='Adresse' value={adresse} onChange={(e) => setAdresse(e.target.value)} />
        </div>
        <div className="input">
            <input type='int' placeholder='Téléphone' value={tel} onChange={(e) => setTel(e.target.value)}/>
        </div>
        <div className="input">
            <input type='text' placeholder='Specialité' value={Specialite} onChange={(e) => setSpecialite(e.target.value)}/>
        </div>
        <div className="input">
            <input type='text' placeholder='Matière' value={Matiere} onChange={(e) => setMatiere(e.target.value)}/>
        </div>
        </div>
        {error && <div className='error'>{error}</div>}
        <div className="submit-container">
            <button type='submit'>Sign Up</button>
        </div>
        </form>
    </div>
  )
}

export default Signup

