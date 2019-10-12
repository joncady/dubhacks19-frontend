import React from 'react';
import { StyledButton } from './style';

export const Button = (props) => {
    const { onClick, text } = props;
    return (
        <StyledButton>
            <button onClick={onClick}>{text}</button>
        </StyledButton>
    );
};