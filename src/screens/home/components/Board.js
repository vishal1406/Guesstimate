import React from 'react';
import { BoardBox } from '../../../shared';
import './board.css';

const Board = ( props ) => {

    return(
        <div className = 'ui-boardRow'>
            {
                [...Array(5)].map( (item, index ) => {
                   return <BoardBox />
                }
                )
            }
        </div>
    )
}

export default Board;