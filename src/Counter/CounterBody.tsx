import React from 'react';
import '../App.css';
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";

type CounterPropsType = {
    myNum: number
    incrementMe: () => void
    resetMe: () => void
    maxValue: number
    error: boolean
}

function CounterBody(props: CounterPropsType) {
    return (
        <div className='mainCon'>
            <Display myNum={props.myNum} maxValue={props.maxValue}
                     error={props.error}/>
            <ButtonsPanel myNum={props.myNum} incrementMe={props.incrementMe}
                          resetMe={props.resetMe}
                          maxValue={props.maxValue}/>
        </div>
    )
}


export default CounterBody;
