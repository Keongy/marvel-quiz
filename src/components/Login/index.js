import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = (props) => {
    const data = {
        email: '',
        password: '',
        validityEmail: false
    }

    const firebase = useContext(FirebaseContext)
    const [loginData, setLoginData] = useState(data)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        firebase.loginUser(email, password)
            .then(user => {
                props.history.push('/welcome')
            })
            .catch(error => {
                setError(error)
            })
            .finally(setLoginData({
                email: '',
                password: '',
                validityEmail: false
            }))
    }


    const errorMsg = <span>{error.message}</span>

    const btn = (loginData.password.length < 6) ? <button disabled>Connexion</button> : <button>Connexion</button>

    const { email, password } = loginData

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {error && errorMsg}
                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} type="email" id='email' value={email} autoComplete='off' required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} type="password" id='password' value={password} autoComplete='off' required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            {btn}
                            <Link className='simpleLink' to='/forgetpassword'>Mot de passe oublié ?</Link>
                        </form>
                        <div className="linkContainer">
                            <Link className='simpleLink' to='/signup'>Nouveau sur marvel Quiz ? Inscrivez-vous maintenant.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;