import React from 'react';
import { Button } from 'antd';

const NewButton = ({ label, handleClick, style = {}, className, disabled }) => (
    <Button
        htmlType={"button"}
        type={"primary"}
        disabled={disabled || false}
        style={{ ...{ height: 39, width: "20%" }, ...style }}
        className={className}
        onClick={handleClick}>
        {label}
    </Button>
);

export default NewButton;