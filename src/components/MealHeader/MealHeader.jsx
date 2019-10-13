import React from 'react';
import { StyledHeader, StyledImage, StyledContent, StyledName, StyledLeft } from './style';
import { Link } from 'react-router-dom';

const MealHeader = (props) => {
    const { location, budget, firstName, lastName, profilePic } = props;
    return (
        <StyledHeader>
            <StyledLeft>
                <StyledImage src={profilePic}></StyledImage>
                <StyledName>{firstName} {lastName}</StyledName>
            </StyledLeft>
            <StyledContent>
                <div style={{ padding: '5px' }}>
                    <div style={{ fontSize: '14px', color: 'gray' }}>{(new Date()).toDateString()}</div>
                    <div>Your remaing balance is:</div>
                    <div>
                        <span style={{ color: '#58C077', fontSize: '40px' }}>${budget}</span> <span style={{ fontSize: '40px', fontWeight: 'bold' }}>USD</span>
                    </div>
                    <div style={{ color: 'gray' }}>
                        {location}
                    </div>
                </div>
            </StyledContent>
            <div style={{ float: 'right' }}>
                <Link to="/signupPreferences">
                    <img src="img/edit.png" style={{ width: '40px', paddingRight: '1em', paddingTop: '1em', opacity: '0.6' }} alt="edit"></img>
                </Link>
            </div>
        </StyledHeader>
    );
}

export default MealHeader; 