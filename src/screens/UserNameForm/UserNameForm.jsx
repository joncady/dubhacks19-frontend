import React from 'react';
import { StyledUserNameForm, StyledH1, InputSpacer, ButtonSpacer } from './style';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import {
	Link
} from "react-router-dom";

const UserNameForm = (props) => {
  let { firstName, lastName, location, onChange } = props;
  let style = {
    backgroundColor: 'transparent',
    outline: '0',
    borderWidth: '0 0 2px',
    borderColor: 'white',
    color: 'white'
  };

  return (
    <StyledUserNameForm>
      <Form>
          <FormGroup>
              <StyledH1>Welcome.</StyledH1>
              <img src="img/logo.png" style={{
                width: '25%',
                height: '25%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }} alt="logo" />
              <InputSpacer><Input type="text" onChange={(e) => onChange("firstName", e.currentTarget.value)} value={firstName} name="text" id="userFirstName" placeholder="First Name" style={style}/></InputSpacer>
              <InputSpacer><Input type="text" onChange={(e) => onChange("lastName", e.currentTarget.value)} value={lastName} name="text" id="userLastName" placeholder="Last Name" style={style}/></InputSpacer>
              <InputSpacer><Input type="text" onChange={(e) => onChange("location", e.currentTarget.value)} value={location} name="text" id="userLocation" placeholder="Location" style={style}/></InputSpacer>
          </FormGroup>
          <ButtonSpacer><Link to="/signupPreferences"><Button color="success" size="lg">Next</Button>{' '}</Link></ButtonSpacer>
      </Form>
    </StyledUserNameForm>
  );
}

export default UserNameForm;