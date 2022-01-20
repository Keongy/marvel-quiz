import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../Firebase';
import Loader from '../Loader';
import Logout from '../Logout';
import Quiz from '../Quiz';

const Welcome = (props) => {
    const firebase = useContext(FirebaseContext)
    const [userSession, setUserSession] = useState(null)
    const [userData, setUserData] = useState({})


    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })

        !!userSession && firebase.user(userSession.uid)
            .get()
            .then(doc => {
                if (doc && doc.exists) {
                    const myData = doc.data()
                    setUserData(myData)
                }
            })
            .catch(error => {
                console.log(error);
            })

        return () => {
            listener()
        }
    }, [userSession, firebase, props.history])

    return userSession === null ? (
        <Loader styling={{ textAlign: 'center', color: 'white' }}>Authentification ...</Loader>
    ) : (
        <div className='quiz-bg'>
            <div className="container">
                <Logout />
                <Quiz userData={userData} />
            </div>
        </div>
    )
};

export default Welcome;