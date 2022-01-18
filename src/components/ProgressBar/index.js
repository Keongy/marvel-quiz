import React from 'react';

const ProgressBar = ({ idQuestion, maxQuestions }) => {

    const progressPercent = Math.round(100 * (idQuestion + 1) / maxQuestions)

    return (
        <>
            <div className="percentage">
                <div className="progressPercent">Question: {idQuestion + 1} / {maxQuestions}</div>
                <div className="progressPercent">Progression: {progressPercent}%</div>
            </div>
            <div className="progressBar">
                <div className="progressBarChange" style={{ width: `${progressPercent}%` }}></div>
            </div>
        </>
    );
};

export default React.memo(ProgressBar);