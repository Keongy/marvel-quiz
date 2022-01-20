import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="banner-container">
                <h1><Link to='/marvel-quiz'>Marvel Quiz</Link></h1>
            </div>
        </header>
    )
}

export default Header