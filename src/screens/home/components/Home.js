import React, { Fragment } from 'react'
import { CustomButton } from '../../../shared/'
import { letters } from '../../../shared/constants'
import { Board } from '.';
import './home.css'

const HomeComponent = (props) => {

     
    return (
        <Fragment>
            <div className='root'>
                <div className='playBoard'>
                    {
                        [...Array(6)].map( (item, index) => {

                           const value = index === props.rowIndex ? props.currentWord : '';
                           return(
                            <div className = 'playBoard-row'>
                                <Board value = {value} />
                            </div>
                           )
                        })
                    }
                </div>
                
                <div>
                    {letters.map((item, index) =>
                        <div className='lettersRowStyle'>{letters[index].map((childItem, childIndex) =>
                            <div className='letterStyle'><CustomButton label={childItem} handleClick={props.handleClick} />
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