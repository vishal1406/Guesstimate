import React from 'react';
import { BoardBox } from '../../../shared';
import './board.css';

const Board = (props) => {

    const { value } = props;

    return (
        <div className='ui-boardRow'>
            {
                [...Array(5)].map((item, index) => {
                    return <BoardBox key={index} value={undefined === value[index] ? '' : value[index]} />
                }
                )
            }
        </div>
    )
}

export default Board;