import React, { Component } from 'react';
import TimerView from '../components';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
             value: ''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <TimerView />
        );
    }
}

Timer.propTypes = {

};

export default Timer;