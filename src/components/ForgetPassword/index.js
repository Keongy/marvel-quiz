import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const ForgetPassword = (props) => {
    const [email, setEmail] = useState('')
    const firebase = useContext(FirebaseContext)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        firebase.lang()
    }, [firebase])

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.passwordReset(email)
            .then(() => {
                setSuccess(`Un email a été envoyé à l'adresse ${email} pour changer le mot de passe`)
                setEmail('')

                setTimeout(() => {
                    props.history.push('/login')
                }, 5000);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }


    const btn = <button>Récupérer</button>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">


                        {
                            success && <span
                                style={{
                                    border: "1px solid green",
                                    background: "green",
                                    color: "#ffffff"
                                }}>
                                {success}
                            </span>
                        }

                        {error && <span>{error}</span>}

                        <h2>Mot de passe oublié ?</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} type="email" id='email' value={email} autoComplete='off' required />
                                <label htmlFor="email">Email</label>
                            </div>


                            {btn}
                        </form>
                        <div className="linkContainer">
                            <Link className='simpleLink' to='/login'>déjà inscrit ? Connectez-vous.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;