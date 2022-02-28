import React from 'react';
import { CustomButton } from '../../../shared/'
import { AiOutlineClose } from "react-icons/ai";
import './gameRules.css';

const GameRules = ( props ) => {

    const letters = ['w', 'o', 'r', 'l', 'd'];
    const status = ['absent', 'absent', 'exact', 'absent', 'present'];
    return(
        <div className = 'ui-rules'>
            <AiOutlineClose className='ui-close-icon'/>
            <h1 className = 'ui-rules__heading'>How to play</h1>
            <div className='ui-rules__subHeading'>
            You get 6 tries to guess a target word.<br />
            Find it before time runs out to win the round.
            </div>
            <div className='ui-rules__example'>
                <div className='ui-rules__example__items'>
                    {
                        letters.map( (item, index) =>
                            <CustomButton overlay={true} status={ status[index]} label={item.toUpperCase()}/>
                        )
                    }
                    
                </div>
            </div>
            <div className='ui-rules__description'><span className='ui-rules__description__absent'>W</span>, <span className='ui-rules__description__absent'>O</span> and <span className='ui-rules__description__absent'>L</span> aren't in the target word at all.<br />
            The third letter <span className='ui-rules__description__exact'>R</span> is correct!<br />
            <span className='ui-rules__description__present'>D</span> occurs elsewhere in the target word.<br />
            <b>A new GUESSTIMATE will be available each day.</b>
            </div>

        </div>
    )
}

export default GameRules;