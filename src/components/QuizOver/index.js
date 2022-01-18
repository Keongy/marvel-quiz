import React, { useEffect, useState } from 'react';


const QuizzOver = React.forwardRef((props, ref) => {
    const [asked, setAsked] = useState([])

    const {
        levelNames,
        score,
        maxQuestions,
        quizLevel,
        percent,
        loadLevelQuestions
    } = props;


    const averageGrade = maxQuestions / 2

    if (score < averageGrade) {
        setTimeout(() => {
            loadLevelQuestions(quizLevel)
        }, 3000);
    }


    useEffect(() => {
        setAsked(ref.current)
    }, [ref])


    const decision = score >= averageGrade ? (
        <>
            <div className="stepsBtnContainer">
                {
                    quizLevel < levelNames.length ?
                        (
                            <>
                                <p className='successMsg'>Bravo, passez au niveau suivant !</p>
                                <button onClick={() => loadLevelQuestions(quizLevel)} className="btnResult success">Niveau Suivant</button>
                            </>
                        )
                        :
                        (
                            <>
                                <p className='successMsg'>Bravo, vous êtes un expert !</p>
                                <button onClick={() => loadLevelQuestions(0)} className="btnResult gameOver">Accueil</button>
                            </>
                        )
                }
            </div>
            <div className="percentage">
                <div className="progressPercent">Réussite: {percent}%</div>
                <div className="progressPercent">Note: {score}/{maxQuestions}</div>
            </div>
        </>
    )
        :
        (
            <>
                <div className="stepsBtnContainer">
                    <p className="failureMsg">Vous avez échoué !</p>
                </div>

                <div className="percentage">
                    <div className="progressPercent">Réussite: {percent}%</div>
                    <div className="progressPercent">Note: {score}/{maxQuestions}</div>
                </div>
            </>
        )

    const questionAnswer = score >= averageGrade ? (
        asked.map(question => {
            return (
                <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>{question.answer}</td>
                    <td><button className="btnInfo">Infos</button></td>
                </tr>
            )
        })
    )
        :
        (
            <tr>
                <td colSpan="3">
                    <div className="loader">
                    </div>
                    <p stryle={{ textAlign: 'center', color: 'red' }}>
                        Vous devez avoir la moyenne pour passer au niveau suivant !
                    </p>
                </td>
            </tr>
        )




    return (
        <>
            {decision}
            <hr />
            <p>Les réponses aux questions posées:</p>

            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Réponse</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnswer}
                    </tbody>
                </table>
            </div>
        </>
    );
});

export default React.memo(QuizzOver);