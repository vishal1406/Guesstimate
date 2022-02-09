import React, { Fragment } from 'react'
import { CustomButton } from '../../../shared/'
import { letters } from '../../../shared/constants'
import { Board } from '.';
import './home.css'

const HomeComponent = ({ handleClick }) => {

    return (
        <Fragment>
            <div className='root'>
                <div className = 'playBoard'>
                   <Board />
                </div>
                <div>
                    {letters.map((item, index) =>
                        <div className='lettersRowStyle'>{letters[index].map((childItem, childIndex) =>
                            <div className='letterStyle'><CustomButton label={childItem} handleClick={handleClick} />
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