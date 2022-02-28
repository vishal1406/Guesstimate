import React, { Fragment } from 'react'
import { CustomButton, Timer } from '../../../shared/'
import { letters, warnings } from '../../../shared/constants'
import { Board } from '.';
import { GameRules } from '.';
import './home.css'

const HomeComponent = ({ boardState, rowIndex, isRowChange, currentWord, handleClick, currentRowEvaluation, totalEvaluation, isShowError, maxLength, keyBoardStatus, handleTimeUp, isWin }) => {
    return (
        <Fragment>
            <div className='root'>
                <GameRules />
                <Timer onTimeUp={(isTimeUp)=>handleTimeUp(isTimeUp)} isWin={isWin}/>
                <div className='main'>
                    <div className='playBoard'>
                        {
                            [...Array(6)].map((item, index) => {
                                let value = '';
                                let evaluation = [false, false, false, false, false];
                                if (index !== rowIndex && index < rowIndex) {
                                    value = boardState[index];
                                    evaluation = totalEvaluation[index];
                                }
                                else if (index === rowIndex) {
                                    value = currentWord;
                                }
                                else value = '';

                                return (
                                    <div className='playBoard-row'>
                                        <Board key={index} filled={index !== rowIndex ? true : false} value={value} evaluation={evaluation} isShowError={isShowError && rowIndex === index} description={value.length !== maxLength ? warnings.notEnoughLetters : warnings.notInWordList} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div>
                        {letters.map((item, index) =>
                            <div className='lettersRowStyle'>{letters[index].map((childItem, childIndex) =>
                                <div className='letterStyle'><CustomButton status={keyBoardStatus[childItem]} label={childItem} handleClick={() => handleClick(childItem)} />
                                </div>
                            )}
                            </div>
                        )}
                    </div>
                </div>
                

            </div>
        </Fragment>
    )
}

export default HomeComponent