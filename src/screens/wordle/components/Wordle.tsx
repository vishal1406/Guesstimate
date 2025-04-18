import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { Button, Timer } from '@shared';
import { LETTERS } from '@shared/constants';
import Board from './Board';
import GameRules from './GameRules';
import '../styles/home.css';

interface WordleComponentProps {
  boardState: string[];
  rowIndex: number;
  currentWord: string;
  handleClick: (char: string) => void;
  totalEvaluation: string[][];
  isShowError: boolean;
  keyBoardStatus: Record<string, string>;
  handleTimeUp: (isTimeUp: boolean) => void;
  isWin: boolean;
  handleClose: () => void;
  closeOverlay: boolean;
}

const Wordle: React.FC<WordleComponentProps> = ({
  boardState,
  rowIndex,
  currentWord,
  handleClick,
  totalEvaluation,
  isShowError,
  keyBoardStatus,
  handleTimeUp,
  isWin,
  handleClose,
  closeOverlay
}) => {
  return (
    <Fragment>
      <div className="root">
        {!closeOverlay &&
          createPortal(<GameRules onCloseClick={handleClose} />, document.body)}
        {closeOverlay && (
          <Timer onTimeUp={handleTimeUp} closeOverlay={closeOverlay} isWin={isWin} />
        )}
        <div className="main">
          <div className="playBoard">
            {[...Array(6)].map((_, index) => {
              let value = '';
              let evaluation: any[] = [false, false, false, false, false];

              if (index !== rowIndex && index < rowIndex) {
                value = boardState[index];
                evaluation = totalEvaluation[index];
              } else if (index === rowIndex) {
                value = currentWord;
              }

              return (
                <div className="playBoard-row" key={index}>
                  <Board
                    filled={index !== rowIndex}
                    value={value as any}
                    evaluation={evaluation}
                    isShowError={isShowError && rowIndex === index}
                  />
                </div>
              );
            })}
          </div>

          <div>
            {LETTERS.map((item, index) => (
              <div className="lettersRowStyle" key={index}>
                {item.map((childItem, childIndex) => (
                  <div className="letterStyle" key={childIndex}>
                    <Button
                      status={keyBoardStatus[childItem]}
                      label={childItem}
                      handleClick={() => handleClick(childItem)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wordle;
