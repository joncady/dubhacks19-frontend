import React from 'react';
import { StyledLanding, StyledH1, StyledH2, StyledButton } from './style';
import {
  Button
} from 'reactstrap';


const Landing = () => {
  	return (
    	<div>
            <StyledLanding>
                <StyledH1>Hapi</StyledH1>
                <StyledH2>Build your smart diet.</StyledH2>
                <Button color="success" size="lg" block>Sign In</Button>{' '}
                <Button color="primary" size="lg" block>Sign Up</Button>{' '}   
            </StyledLanding>
    	</div>
  	);
};

export default Landing;