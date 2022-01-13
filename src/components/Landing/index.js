import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    const [btn, setBtn] = useState(false)

    const refWolverine = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg")
            setBtn(true)
        }, 1000);
    }, [])

    const addImgRight = () => {
        refWolverine.current.classList.add("rightImg")
    }

    const addImgLeft = () => {
        refWolverine.current.classList.add("leftImg")
    }

    const clearImg = () => {
        refWolverine.current.classList.remove("leftImg", "rightImg")
    }


    return (
        <main ref={refWolverine} className='welcomePage startingImg'>
            <div className="leftBox">
                {btn && <Link to="/signup" onMouseOver={addImgLeft} onMouseOut={clearImg} className="btn-welcome">Inscription</Link>}
            </div>
            <div className="rightBox">
                {btn && <Link to="/login" onMouseOver={addImgRight} onMouseOut={clearImg} className="btn-welcome">Connexion</Link>}
            </div>
        </main>
    );
};

export default Landing;