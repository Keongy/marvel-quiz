import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../Firebase';

const Logout = () => {
    const [checked, setChecked] = useState(false)
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        if (checked) {
            console.log('Déconnexion')
            firebase.signoutUser();
        }

    }, [checked, firebase])
    

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }


    return (
        <div className="logoutContainer">
            <div className="switch">
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className='slider round'></span>
            </div>
        </div>
    );
};

export default Logout;