import React, { Component } from 'react';
import TimerView from '../components';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            fixedTime: 300,
            duration: 300
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    handleTimer({isContinue}){
        if(this.state.duration!==0&&this.state.duration>0)
        this.timer = setInterval(this.countDown, 1000);
    }

    stopTimer(){
        clearInterval(this.timer);
    }

    countDown(isContinue){
        console.log("countDown");
        let duration = this.state.duration-1;
        this.setState({duration});
        if(duration === 0){
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <TimerView 
               duration = {this.state.duration}
               handleTimer = {this.handleTimer}
               handleStop = {this.stopTimer}
               fixedTime = {this.state.fixedTime}
            />
        );
    }
}

export default Timer;