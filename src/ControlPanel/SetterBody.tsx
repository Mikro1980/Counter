import React, {ChangeEvent} from 'react';
import '../App.css';
import SetButtonPanel from "./SetButtonPanel";
import InputDisplay from "./InputDisplay";

type ControlPanelProps = {
    startValueSetter: (value: number) => void
    startValue: number
    startValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    maxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    maxError: boolean
    startError: boolean
}

function SetterBody(props: ControlPanelProps) {

    return (
        <div className='mainCon'>
            <InputDisplay startValueSetter={props.startValueSetter}
                          maxValue={props.maxValue}
                          maxValueHandler={props.maxValueHandler}
                          startValueHandler={props.startValueHandler}
                          startValue={props.startValue}
                          maxError={props.maxError}
                          startError={props.startError}

            />
            <SetButtonPanel startValueSetter={props.startValueSetter}/>
        </div>
    )
}


export default SetterBody;
