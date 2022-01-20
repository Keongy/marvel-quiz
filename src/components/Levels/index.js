import React, { useEffect, useState } from 'react';
import Stepper from 'react-stepper-horizontal/lib/Stepper';

const Levels = ({ quizLevel, levelNames }) => {
    const [levels, setLevels] = useState([])


    useEffect(() => {
        const step = levelNames.map(level => ({
            title: level.toUpperCase()
        }))
        setLevels(step)
    }, [levelNames])

    return (
        <div className='levelsContainer' style={{ background: 'transparent' }}>
            <Stepper
                steps={levels}
                activeStep={quizLevel}
                circleTop={0}
                activeTitleColor={'#d31017'}
                activeColor={'#d31017'}
                completeTitleColor={'#E0E0E0'}
                completeColor={'#E0E0E0'}
                completeBarColor={'#E0E0E0'}
                barStyle={'dotted'}
                size={45}
                titleFontSize={20}
                circleFontSize={20}
            />
        </div>
    );
};

export default Levels;