import React from 'react';
import './timer.css';
import { BsFillAlarmFill } from "react-icons/bs";



const TimerView = ( props )=> {

    const { duration } = props;

    // let remainingTime = fixedTime - fixedTime%duration;
    let minutes = parseInt(duration/60,10);
    let seconds = parseInt(duration%60,10);
    // console.log(minutes, seconds);

    minutes = minutes<10? "0" + minutes : minutes;
    seconds = seconds<10? "0" + seconds : seconds;
    let value = `${minutes}:${seconds}`;

    return (
        
        <div className='ui-timer'>
            {/* <BsFillAlarmFill className='ui-alarm-icon' size={100}/>
            <div className='ui-timer__space'>
                {value}
            </div>
            <div className='ui-timer__buttons'>
                <button className='ui-timer__buttons__start' onClick={props.handleTimer}>Start</button>
                <button  className='ui-timer__buttons__stop' onClick = {props.handleStop}>stop</button>
            </div> */}

            <span>Time Left:</span> <span>&nbsp;</span>{value}
            
        </div>
        
    );
}

export default TimerView