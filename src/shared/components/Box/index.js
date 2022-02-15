import React from 'react'; 
import './box.css';
import classNames from 'classnames';

const BoardBox = ( props ) => {

    const { status, filled = false } = props;
    const classname = classNames( 'ui-boardBox', {
        'ui-boardBox--default': false === status,
        'ui-boardBox--notPresent': 'absent' === status,
        'ui-boardBox--present': 'present' === status,
        'ui-boardBox--exact': 'exact' === status
    })

    return(

        <div className={classname} style={{color: filled? '#fff': '#000'}}>{props.value.toUpperCase()}</div>
    )
}

export default BoardBox;