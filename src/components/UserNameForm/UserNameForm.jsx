import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';

const UserNameForm = (props) => {
  return (
    <Form>
        <FormGroup>
            <Label>Welcome.</Label>
            <Input type="text" name="text" id="userFirstName" placeholder="First Name" />
            <Input type="text" name="text" id="userLastName" placeholder="Last Name" />
            <Input type="text" name="text" id="userLocation" placeholder="Location" />
        </FormGroup>
        <Button color="success">Get Started</Button>{' '}
    </Form>
  );
}

export default UserNameForm;