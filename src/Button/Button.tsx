import React, {useState} from 'react';
import '../App.css';
import Display from "../Counter/Display";

type ButtonProps = {
    myNum: number
    title: string
    function: () => void
    disabled: number

}
const Button = (props: any) => {
    return <button
        disabled={props.disabled >= 0 && props.myNum === props.disabled}
        onClick={props.function}>{props.title}</button>
}


export default Button;
