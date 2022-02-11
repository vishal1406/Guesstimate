import React, { Component } from 'react';
import { Board } from '../components';

class BoardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowIndex: 0,
            boardState: ["", "", "", "", "", ""],
            currentRowEvaluation: [],
            totalEvaluation: []
        }
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillReceiveProps = (nextProps) => {

    }

    shouldComponentUpdate = (nextProps, nextState) => {

    }

    componentWillUpdate = (nextProps, nextState) => {

    }

    componentDidUpdate = (prevProps, prevState) => {

    }

    componentWillUnmount = () => {

    }

    render() {
        return (
            <Board />
        );
    }
}

Board.propTypes = {

};

export default BoardContainer;