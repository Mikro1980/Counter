import React, {ChangeEvent, useState} from 'react';
import './App.css';
import CounterBody from "./Counter/CounterBody";
import SetterBody from "./ControlPanel/SetterBody";

function App() {
    let localStartString = localStorage.getItem('startValue');
    let localStartValue = Number(localStartString)
    let localMaxString= localStorage.getItem('maxValue')
    let localMaxValue = Number(localMaxString)

    const [maxError, setMaxError] = useState(false)
    const [startError, setStartError] = useState(false)
    const [error, setError] = useState(false)

    const [myNum, setMyNum] = useState(0);
    const [maxValue, setMaxValue] = useState<number>(localMaxValue||5)
    const [startValue, setStartValue] = useState<number>( localStartValue||0)

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newV = +e.currentTarget.value
        if (newV < 0 || newV >= maxValue) {
            setStartError(true);
            setError(true)
        } else {
            localStorage.setItem('startValue',JSON.stringify(newV) )
            setStartValue(newV)
            setStartError(false);
            setError(false)
        }
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newV = +e.currentTarget.value
        if (startValue >= newV) {
            setMaxError(true);
            setError(true)
        } else {
            localStorage.setItem('maxValue',JSON.stringify(newV) )
            setMaxValue(newV)
            setMaxError(false);
            setError(false)
        }
    }

    function incrementMe() {
        setMyNum(myNum + 1)
    }

    function resetMe() {
        setMyNum(0);
    }

    function startValueSetter(value: number) {
        setMyNum(startValue)
    }

    console.log('maxError', maxError)
    console.log('startError', startError)
    console.log('error', error)

    return (
        <div className="App">
            <SetterBody startValueSetter={startValueSetter}
                        startValue={startValue}
                        startValueHandler={startValueHandler}
                        maxValueHandler={maxValueHandler}
                        maxValue={maxValue}
                        maxError={maxError}
                        startError={startError}
            />
            <CounterBody myNum={myNum}
                         incrementMe={incrementMe}
                         resetMe={resetMe}
                         maxValue={maxValue}
                         error={error}
            />
        </div>
    );
}

export default App;
