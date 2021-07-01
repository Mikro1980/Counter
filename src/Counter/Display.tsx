import React, {useState} from 'react';
import '../App.css';

type DisplayProps = {
    myNum: number
    maxValue: number
    error:boolean
}

function Display(props: DisplayProps) {
    let error=props.error
    let displayClass =
        props.myNum === props.maxValue ?
            'display red' : 'display'
    return !error?
        <div className={displayClass}>{props.myNum}</div>:
        <div className={'display errorClass'}>{"Incorrect value!"}</div>
}

export default Display;
