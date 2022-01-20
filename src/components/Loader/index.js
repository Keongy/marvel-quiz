import React from 'react';

const Loader = ({ styling, children }) => {
    return (
        <>
            <div className="loader">
            </div>
            <p style={styling}>
                {children}
            </p>
        </>
    );
};

export default Loader;