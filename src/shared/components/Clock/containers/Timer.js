import React, { Component } from 'react';
import TimerView from '../components';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isTimeUp: false,
            duration: 30
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        // if(props.closeOverlay)
        this.handleTimer();
        
        // this.stopTimer = this.stopTimer.bind(this);
    }

    handleTimer(){
        if(this.state.duration!==0&&this.state.duration>0)
        this.timer = setInterval(this.countDown, 1000);
    }

    stopTimer(){
        clearInterval(this.timer);
    }

    countDown(){
        // console.log("countDown");
        let duration = this.state.duration-1;
        this.setState({duration});
        if(this.props.isWin)this.stopTimer();
        if(duration === 0){
            this.setState({isTimeUp:true})
            this.props.onTimeUp(this.state.isTimeUp);
            clearInterval(this.timer);
            
        }
    }

    render() {
        return (
            <TimerView 
               duration = {this.state.duration}
               isTimeUp = {this.state.isTimeUp}
               handleTimer = {this.handleTimer}
            //    handleTimer = {this.handleTimer}
            //    handleStop = {this.stopTimer}
            //    fixedTime = {this.state.fixedTime}
            />
        );
    }
}

export default Timer;