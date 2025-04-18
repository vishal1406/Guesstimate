import { Component } from "react";
import { HomeComponent } from "../components";
import { LETTERS_LIST, WARNINGS } from "../../../shared/constants";
import {
  notifyErrorMessage,
  generateRandomNumber,
  getEvaluatedAndStatus,
} from "../../../utils/helper";
import { generate } from "random-words";

interface HomeContainerState {
  rowIndex: number;
  boardState: string[];
  totalEvaluation: string[][];
  solution: string;
  maxLength: number;
  currentWord: string;
  isRowChange: boolean;
  isWin: boolean;
  isShowError: boolean;
  keyBoardStatus: Record<string, string>;
  isTimeUp: boolean;
  closeOverlay: boolean;
}

class HomeContainer extends Component<{}, HomeContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      rowIndex: 0,
      boardState: [],
      totalEvaluation: [],
      solution: "",
      maxLength: 5,
      currentWord: "",
      isRowChange: false,
      isWin: false,
      isShowError: false,
      keyBoardStatus: {},
      isTimeUp: false,
      closeOverlay: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    this.getRandomWord(5);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  getRandomWord = (givenLen: number) => {
    let isRandomNumberFound = false;
    while (!isRandomNumberFound) {
      const generatedWords = generate({
        exactly: 20,
        minLength: givenLen,
        maxLength: givenLen,
      });
      const randomNumber = generateRandomNumber(generatedWords.length);
      console.log(generatedWords[randomNumber]);
      this.setState({ solution: generatedWords[randomNumber] });
      isRandomNumberFound = true;
    }
  };

  handleEnter = (_event: any) => {
    const { currentWord, maxLength, boardState, solution, keyBoardStatus } =
      this.state;

    if (currentWord.length === maxLength && boardState.length < 6) {
      if (boardState.includes(currentWord)) {
        notifyErrorMessage(WARNINGS.repeatingWords);
        return;
      }

      const _solution = [...solution];
      const { _currentRowEvaluation, _keyBoardStatus } = getEvaluatedAndStatus({
        _solution,
        value: currentWord,
      });

      this.setState((prevState) => ({
        totalEvaluation: [...prevState.totalEvaluation, _currentRowEvaluation],
        boardState: [...prevState.boardState, currentWord],
        rowIndex: prevState.rowIndex + 1,
        isRowChange: !prevState.isRowChange,
        currentWord: "",
        isWin: currentWord === solution,
        isShowError: false,
        keyBoardStatus: { ...keyBoardStatus, ..._keyBoardStatus },
      }));
    } else {
      this.setState({ isShowError: true });
      notifyErrorMessage(WARNINGS.notEnoughLetters);
      this.handleShowError();
    }
  };

  handleShowError = () => {
    setTimeout(() => {
      this.setState({ isShowError: false });
    }, 1000);
  };

  handleDelete = (_event: any) => {
    const { currentWord } = this.state;
    if (currentWord) {
      this.setState({ currentWord: currentWord.slice(0, -1) });
    }
  };

  handleChange = (event: { key: string }) => {
    const { currentWord, maxLength } = this.state;
    let value = currentWord;
    if (value.length < maxLength) {
      value += event.key;
      this.setState({ currentWord: value, isRowChange: false });
    } else {
      console.log("Max Length Reached");
    }
  };

  handleKeyPress = (event: KeyboardEvent) => {
    const { isWin, isTimeUp, closeOverlay } = this.state;

    if (!isWin && !isTimeUp && closeOverlay) {
      if (event.keyCode === 8) {
        this.handleDelete(event);
      } else if (event.keyCode === 13) {
        this.handleEnter(event);
      } else if (LETTERS_LIST.includes(event.key)) {
        this.handleChange(event);
      }
    }
  };

  handleClick = (key: string) => {
    if (!this.state.isTimeUp && this.state.closeOverlay) {
      if (key === "DEL") {
        this.handleDelete({ key });
      } else if (key === "ENTER") {
        this.handleEnter({ key });
      } else if (LETTERS_LIST.includes(key.toLowerCase())) {
        this.handleChange({ key });
      }
    }
  };

  handleTimeUp = (isTimeUp: boolean) => {
    if (isTimeUp) {
      this.setState({ isTimeUp });
    }
    notifyErrorMessage(WARNINGS.timeUp);
  };

  handleClose = () => {
    this.setState({ closeOverlay: true });
  };

  render() {
    const {
      rowIndex,
      boardState,
      totalEvaluation,
      solution,
      maxLength,
      currentWord,
      isRowChange,
      isShowError,
      keyBoardStatus,
      isWin,
      closeOverlay,
    } = this.state;

    return (
      <HomeComponent
        rowIndex={rowIndex}
        boardState={boardState}
        totalEvaluation={totalEvaluation}
        // @ts-ignore
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
        handleClick={this.handleClick}
      />
    );
  }
}

export default HomeContainer;
