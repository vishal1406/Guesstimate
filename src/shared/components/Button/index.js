import React from 'react'
import './button.css'


const CustomButton = ({ label, className, disabled, handleClick }) => {
    return (
        <button
            className={`${'customStyle'} ${className}`}
            disabled={disabled || false}
            onClick={handleClick}>
            {label}
        </button>
    )
}

export default CustomButton