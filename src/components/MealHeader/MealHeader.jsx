import React from 'react';
import styled from 'styled-components';
import { StyledHeader, StyledImage, StyledContent, StyledName, StyledLeft } from './style';

const MealHeader = (props) => {
    const { user, savings } = props; 
    return (
        <StyledHeader>
            <StyledLeft>
                <StyledImage src={"img/userPic.jpg"}></StyledImage>
                <StyledName>{user}</StyledName>
            </StyledLeft>
            <StyledContent>
                <div style={{ padding: '5px' }}>
                    <div style={{ fontSize: '14px', color: 'gray' }}>{(new Date()).toDateString()}</div>
                    <div>Your remaing balance is:</div>
                    <div>
                        <span style={{ color: '#58C077', fontSize: '40px' }}>${savings}</span> <span style={{ fontSize: '40px', fontWeight: 'bold' }}>USD</span>
                    </div>
                    <div style={{ color: 'gray' }}>
                        Seattle, WA
                    </div>
                </div>
            </StyledContent>
        </StyledHeader>
    );
}

export default MealHeader; 