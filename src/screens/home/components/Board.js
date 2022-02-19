import React, { Fragment } from 'react';
import { BoardBox } from '../../../shared';
import './board.css';

const Board = (props) => {

    const { value, evaluation, isShowError = 'false', description = '', filled } = props;

    return (
        <Fragment>
            {/* { isShowError && <div className='ui-showError'>{ description }</div> } */}
            <div className='ui-boardRow' >
                {
                    [...Array(5)].map((item, index) => {
                        return <BoardBox key={index} filled={filled} status={evaluation[index]} value={undefined === value[index] ? '' : value[index]} notEnoughLetters={isShowError} />
                    }
                    )
                }
            </div>
        </Fragment>

    )
}

export default Board;