import React, {useState} from 'react';
import '../App.css';
import Button from "../Button/Button";

type DashProps = {
    startValueSetter: (value:number) => void

}

function SetButtonPanel(props: DashProps) {
    return (
        <div className='dashBoard'>

            <Button
                title={'set'}
                function={props.startValueSetter}
                disabled={0}

            />

        </div>)
}


export default SetButtonPanel;
