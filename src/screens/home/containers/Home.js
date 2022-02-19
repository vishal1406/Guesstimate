import React, { Component } from 'react'
import { HomeComponent } from '../components'
import { lettersList, warnings } from '../../../shared/constants'
import randomWords from 'random-words'
import { notifyErrorMessage } from '../../../utils/helper'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowIndex: 0,
            boardState: [],
            currentRowEvaluation: [],
            totalEvaluation: [],
            solution: "pause",
            maxLength: 5,
            currentWord: "",
            isRowChange: false,
            isWin: false,
            isShowError: false
        }
    }

    componentDidMount = () => {
        // For tracking of each key-stroke
        document.addEventListener('keydown', this.handleKeyPress);
        let arr = randomWords({ exactly: 20, maxLength: 5 });
        console.log(arr)
    }

    componentWillUnmount = () => {
        // Removing event listener
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleEnter = (event) => {

        let value = this.state.currentWord;

        // allow enter in case of word length equal to max length
        if (value.length === this.state.maxLength && this.state.boardState.length < 6) {
            let _currentRowEvaluation = [];

            // solution array
            let _solution = [...this.state.solution];
            let flag;

            // check the status of alphabet position
            for (let i = 0; i < value.length; i++) {
                let temp = value[i];
                flag = false;
                for (let j = 0; j < _solution.length; j++) {
                    if (_solution[j] === temp && i === j) {
                        _currentRowEvaluation.push('exact');
                        _solution[j] = '*';
                        flag = true;
                        break;
                    }

                    if (_solution[j] === temp && i !== j) {
                        _currentRowEvaluation.push('present');
                        _solution[j] = '*';
                        flag = true;
                        break;
                    }
                }
                if (!flag)
                    _currentRowEvaluation.push('absent');
            }

            // update the state in case of enter
            this.setState(prevState => ({
                totalEvaluation: [...prevState.totalEvaluation, _currentRowEvaluation],
                currentRowEvaluation: _currentRowEvaluation,
                boardState: [...prevState.boardState, value],
                rowIndex: prevState.rowIndex + 1,
                isRowChange: !prevState.isRowChange,
                currentWord: '',
                isWin: value === this.state.solution,
                isShowError: false,
            }))
        } else {
            this.setState({ isShowError: true });
            notifyErrorMessage(warnings.notEnoughLetters)
            this.handleShowError();
        }
    }

    handleShowError = () => {
        setTimeout(() => {
            this.setState({ isShowError: false })
        }, 1000);
    }

    handleDelete = (event) => {

        // delete the char on delete key press
        let { currentWord } = this.state
        if (currentWord) {
            this.setState({ currentWord: currentWord.slice(0, -1) })
        }
    }

    handleChange = (event) => {

        // update the value
        let { currentWord, maxLength } = this.state
        let value = currentWord;
        if (value.length < maxLength) {
            value += event.key;
            this.setState({ currentWord: value, isRowChange: false });
        } else {
            console.log("Max Length Reached");
        }
    }

    handleKeyPress = (event) => {

        // disable in case of win the game
        if (!this.state.isWin) {
            if (event.keyCode === 8) {
                this.handleDelete(event);
            } else if (event.keyCode === 13) {
                this.handleEnter(event);
            } else if (lettersList.includes(event.key)) {
                this.handleChange(event);
            }
        }
    }

    handleClick = (key) => {
        if (key === 'DEL') {
            this.handleDelete({ key });
        } else if (key === 'ENTER') {
            this.handleEnter({ key });
        } else if (lettersList.includes(key.toLowerCase())) {
            this.handleChange({ key });
        }
    }

    render() {
        const { rowIndex, boardState, currentRowEvaluation, totalEvaluation, solution,
            maxLength, currentWord, isRowChange, isShowError } = this.state
        return (
            <HomeComponent
                rowIndex={rowIndex}
                boardState={boardState}
                currentRowEvaluation={currentRowEvaluation}
                totalEvaluation={totalEvaluation}
                solution={solution}
                maxLength={maxLength}
                currentWord={currentWord}
                isRowChange={isRowChange}
                isShowError={isShowError}
                handleClick={this.handleClick} />
        )
    }
}

export default HomeContainer