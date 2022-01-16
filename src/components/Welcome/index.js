import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../Firebase';
import Logout from '../Logout';
import Quiz from '../Quiz';

const Welcome = (props) => {
    const firebase = useContext(FirebaseContext)
    const [userSession, setUserSession] = useState(null)

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })

        return () => {
            listener()
        }
    }, [])

    return userSession === null ? (
        <>
            <div className="loader"></div>
            <p>Loading ...</p>
        </>
    ) : (
        <div className='quiz-bg'>
            <div className="container">
                <Logout />
                <Quiz />
            </div>
        </div>
    )
};

export default Welcome;