import React, {ChangeEvent, useState} from 'react';
import '../App.css';

type InputProps = {
    startValueSetter: (value: number) => void
    startValue: number
    startValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    maxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    maxError: boolean
    startError: boolean
}

function InputDisplay(props: InputProps) {

    // let error = props.error
    return (
        <div className={'displayPanel'}>
            <div>max value:   <input className={!props.maxError ? '': 'redInput'} type={'number'}
                                     value={props.maxValue}
                                  onChange={props.maxValueHandler}/>
            </div>
            <div>start value:<input className={!props.startError ? '': 'redInput'} type={'number'}
                                    value={props.startValue}
                                    onChange={props.startValueHandler}/>
            </div>

        </div>)
}

export default InputDisplay;
