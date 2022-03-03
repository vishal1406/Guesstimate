import React, { Component } from 'react'
import { HomeComponent } from '../components'
import { lettersList, warnings, wordList } from '../../../shared/constants'
import randomWords from 'random-words'
import { notifyErrorMessage, generateRandomNumber, getEvaluatedAndStatus } from '../../../utils/helper'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowIndex: 0,
            boardState: [],
            currentRowEvaluation: [],
            totalEvaluation: [],
            solution: "",
            maxLength: 5,
            currentWord: "",
            isRowChange: false,
            isWin: false,
            isShowError: false,
            keyBoardStatus: {},
            isTimeUp: false,
            closeOverlay: false
        }
    }

    componentDidMount = () => {
        // For tracking of each key-stroke
        
        document.addEventListener('keydown', this.handleKeyPress);
        this.getRandomWord(5)
        
    }

    componentWillUnmount = () => {
        // Removing event listener
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    getRandomWord = (givenLen) => {
        let isRandomNumberFound = false
        while (!isRandomNumberFound) {
            let generatedWords = randomWords({ exactly: 20, maxLength: givenLen });
            let givenLenWords = generatedWords.filter((item) => { return item.length === givenLen })
            if (givenLenWords) {
                let randomNumber = generateRandomNumber(givenLenWords.length)
                this.setState({ solution: givenLenWords[randomNumber] })
                isRandomNumberFound = true
            }
        }
    }

    handleEnter = (event) => {

        let value = this.state.currentWord;

        // allow enter in case of word length equal to max length
        if (value.length === this.state.maxLength && this.state.boardState.length < 6) {
            // let _currentRowEvaluation = [];

            let flag = false;
            this.state.boardState.forEach(element => {
                if( value === element ){
                    notifyErrorMessage(warnings.repeatingWords);
                    flag=true;
                    return;
                }
            });
            if(flag)return;
            // solution array
            let _solution = [...this.state.solution];

            const { _currentRowEvaluation, _keyBoardStatus } = getEvaluatedAndStatus( { _solution, value });

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
                keyBoardStatus: { ...this.state.keyBoardStatus, ..._keyBoardStatus }
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
        if (!this.state.isWin && !this.state.isTimeUp && this.state.closeOverlay) {
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
        if(!this.state.isTimeUp && this.getSnapshotBeforeUpdate.closeOverlay){
            if (key === 'DEL') {
                this.handleDelete({ key });
            } else if (key === 'ENTER') {
                this.handleEnter({ key });
            } else if (lettersList.includes(key.toLowerCase())) {
                this.handleChange({ key });
            }
        }
    }

    handleTimeUp = (isTimeUp)=>{
        if(isTimeUp){
            this.setState({isTimeUp});
        }
        notifyErrorMessage(warnings.timeUp);
    }

    handleClose = () => {
        this.setState({closeOverlay: true})
    }
    render() {
        const { rowIndex, boardState, currentRowEvaluation, totalEvaluation, solution,
            maxLength, currentWord, isRowChange, isShowError, keyBoardStatus, isWin, closeOverlay } = this.state
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
                keyBoardStatus={keyBoardStatus}
                handleTimeUp={this.handleTimeUp}
                isWin={isWin}
                closeOverlay={closeOverlay}
                handleClose={this.handleClose}
                handleClick={this.handleClick} />
        )
    }
}

export default HomeContainer