import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../Firebase';
import ReactTooltip from 'react-tooltip';

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
        <div className="logoutContainer" >
            <label className="switch" data-tip='Déconnexion'>
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className='slider round'></span>
            </label>
            <ReactTooltip
                place='left'
                effect='solid'
            />
        </div>
    );
};

export default Logout;