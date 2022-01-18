import React from 'react';

const Button = ({ label, className, handleClick }) => {
    console.log("clicked");
    return (
        <button onClick={handleClick} className={className}>{label}</button>
    );
};

export default React.memo(Button);