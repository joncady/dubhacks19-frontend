import React from 'react';
import { StyledLanding, StyledH1, StyledH2 } from './style';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <StyledLanding>
        <StyledH1>Hapi</StyledH1>
        <StyledH2>Build your smart diet.</StyledH2>
        <Button color="success" size="lg" block>Sign In</Button>{' '}
        <Link to="/signupName"><Button color="primary" size="lg" block>Sign Up</Button>{' '}</Link>
      </StyledLanding>
    </div>
  );
};

export default Landing;