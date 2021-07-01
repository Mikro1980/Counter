import React, {useState} from 'react';
import '../App.css';
import Button from "../Button/Button";

type DashProps = {
    incrementMe: () => void
    resetMe: () => void
    myNum: number
    maxValue: number
}

function ButtonsPanel(props: DashProps) {
    return (
        <div className='dashBoard'>
            <Button
                myNum={props.myNum}
                disabled={props.maxValue}
                function={props.incrementMe}
                title={'inc'}/>
            <Button
                myNum={props.myNum}
                disabled={0}
                function={props.resetMe}
                title={'reset'}/>

        </div>)
}


export default ButtonsPanel;
