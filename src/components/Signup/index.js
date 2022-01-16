import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Signup = (props) => {

    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data)
    const [error, setError] = useState('')
    const { pseudo, email, password, confirmPassword } = loginData


    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, pseudo } = loginData
        firebase.signupUser(email, password)
            .then(authUser => {
                return firebase.user(authUser.user.uid).set({
                    pseudo,
                    email
                })
            })
            .then(() => {
                setLoginData({ ...data })
                setError('')
                props.history.push('/welcome')
            })
            .catch(error => {
                setError(error)
                setLoginData({ ...data })
            })
    }



    const btn = pseudo === '' || email === '' || password === '' || confirmPassword !== password ? <button disabled>Inscription</button> : <button>Inscription</button>

    //gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>


    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} type="text" id='pseudo' value={pseudo} autoComplete='off' required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} type="email" id='email' value={email} autoComplete='off' required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} type="password" id='password' value={password} autoComplete='off' required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} type="password" id='confirmPassword' value={confirmPassword} autoComplete='off' required />
                                <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
                            </div>
                            {btn}
                        </form>
                        <div className="linkContainer">
                            <Link className='simpleLink' to='/login'>Déjà inscrit ? Connecter-vous.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;