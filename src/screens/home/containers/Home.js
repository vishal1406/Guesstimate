import React, { Component } from 'react'
import { HomeComponent } from '../components'
import { lettersList } from '../../../shared/constants'

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
            isRowChange: false
        }
    }

    componentDidMount = () => {
        // For tracking of each key-stroke
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        // Removing event listener
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleEnter = (event) => {
        console.log("enter pressed ");

        let value = this.state.currentWord;
        if (value.length === this.state.maxLength && this.state.boardState.length < 6) {
            this.setState(prevState => ({
                boardState: [...prevState.boardState, value],
                rowIndex: prevState.rowIndex + 1,
                isRowChange: !prevState.isRowChange,
                currentWord: ''
            }))
        }
    }

    handleDelete = (event) => {
        let { currentWord } = this.state
        if (currentWord) {
            this.setState({ currentWord: currentWord.slice(0, -1) })
        }
    }

    handleChange = (event) => {
        console.log(event.key);
        
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
        if (event.keyCode === 8) {
            this.handleDelete(event);
        } else if (event.keyCode === 13) {
            this.handleEnter(event);
        } else if (lettersList.includes(event.key)) {
            this.handleChange(event);
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
            maxLength, currentWord, isRowChange } = this.state
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
                handleClick={this.handleClick} />
        )
    }
}

export default HomeContainer