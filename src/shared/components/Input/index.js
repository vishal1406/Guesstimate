import React from 'react';
import { Input } from 'antd';

const NewInput = ({ placeholder, onChange, value, style = {}, disabled }) => {
    return (
        <Input
            style={{ ...{ fontSize: 15, height: 40 }, ...style }}
            size={"large"}
            type={"text"}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled || false}
        />
    )
}

export default NewInput;