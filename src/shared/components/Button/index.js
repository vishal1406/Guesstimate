import React from 'react'
import './button.css'
import classNames from 'classnames';

const CustomButton = ({ label, className, disabled, handleClick, status, overlay = false }) => {

    const classname = classNames( 'ui-keyBoard-box', {
        'ui-keyBoard-box--notPresent': 'absent' === status,
        'ui-keyBoard-box--present': 'present' === status,
        'ui-keyBoard-box--exact': 'exact' === status,
        'ui-keyBoard-box--overlay': overlay
    })
    return (
        <button
            className={ classname }
            disabled={disabled || false}
            onClick={handleClick}>
           
            {label}
        </button>
    )
}

export default CustomButton