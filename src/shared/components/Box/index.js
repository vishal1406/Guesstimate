import React from 'react'; 
import './box.css';
import classNames from 'classnames';

const BoardBox = ( props ) => {

    // const [value, setValue] = useState('');
    const { status } = props;
    const classname = classNames( 'ui-boardBox', {
        'ui-boardBox--notPresent': false === status,
        'ui-boardBox--present': true === status,
        'ui-boardBox--exact': 'present' === status
    })

    
    // const handleChange = ( event ) => {
    //     console.log( event.target.value );
    //     setValue( event.target.value );
    // }
    return(
        // <input className={ classname } value={value} maxLength='1' onChange= { handleChange } />
        <div className={classname}>{props.value.toUpperCase()}</div>
    )
}

export default BoardBox;