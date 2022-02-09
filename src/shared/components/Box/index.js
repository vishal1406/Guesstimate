import React, { useState } from 'react'; 
import './box.css';
import classNames from 'classnames';

const BoardBox = ( props ) => {

    const [value, setValue] = useState('');
    const { present = false, exact = false } = props;
    const classname = classNames( 'ui-boardBox', {
        'ui-boardBox--notPresent': !present,
        'ui-boardBox--present': present,
        'ui-boardBox--exact': exact
    })

    const handleChange = ( event ) => {
        console.log( event.target.value );
        setValue( event.target.value );
    }
    return(
        <input className={ classname } value={value} maxLength='1' onChange= { handleChange } />
    )
}

export default BoardBox;