import React, { useEffect, useRef, useState } from 'react';

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
                {btn && <button onMouseOver={addImgLeft} onMouseOut={clearImg} className="btn-welcome">Inscription</button>}
            </div>
            <div className="rightBox">
                {btn && <button onMouseOver={addImgRight} onMouseOut={clearImg} className="btn-welcome">Connexion</button>}
            </div>
        </main>
    );
};

export default Landing;