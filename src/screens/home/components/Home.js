import React, { Fragment } from 'react'
import { CustomButton } from '../../../shared/'
import { letters } from '../../../shared/constants'
import { Board } from '.';
import './home.css'

const HomeComponent = ({ boardState, rowIndex, isRowChange, currentWord, handleClick }) => {
    return (
        <Fragment>
            <div className='root'>
                <div className='playBoard'>
                    {
                        [...Array(6)].map((item, index) => {
                            let value = '';
                            if (index !== rowIndex && index < rowIndex) {
                                value = boardState[index];
                            }
                            else if (index === rowIndex) {
                                value = currentWord;
                            }
                            else value = '';
                            //    const value = (index === rowIndex && !isRowChange) ? currentWord : '';
                            return (
                                <div className='playBoard-row'>
                                    <Board key={index} value={value} />
                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    {letters.map((item, index) =>
                        <div className='lettersRowStyle'>{letters[index].map((childItem, childIndex) =>
                            <div className='letterStyle'><CustomButton label={childItem} handleClick={() => handleClick(childItem)} />
                            </div>
                        )}
                        </div>
                    )}
                </div>

            </div>
        </Fragment>
    )
}

export default HomeComponent