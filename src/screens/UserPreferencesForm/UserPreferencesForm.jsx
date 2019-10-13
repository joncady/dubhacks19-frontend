import React from 'react';
import { StyledUserPreferencesForm, StyledH1, StyledLabel, StyledCustomInput } from './style';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import { Link } from "react-router-dom";

const UserPreferencesForm = (props) => {
    
  return (
    <StyledUserPreferencesForm>
        <StyledH1>What's your diet preference?</StyledH1>
        <Form>
            <FormGroup>
                <StyledLabel for="exampleCheckbox">Diet Restrictions</StyledLabel>
                <div>
                    <StyledCustomInput type="checkbox" id="diet1" label="Vegetarian" />
                    <StyledCustomInput type="checkbox" id="diet2" label="Vegan" />
                    <StyledCustomInput type="checkbox" id="diet3" label="Pescetarian" />
                </div>
            </FormGroup>
            <FormGroup>
                <StyledLabel for="exampleCheckbox">Favorite Cuisines</StyledLabel>
                <div>
                    <StyledCustomInput type="checkbox" id="cuisine1" label="Italian" />
                    <StyledCustomInput type="checkbox" id="cuisine2" label="Chinese" />
                    <StyledCustomInput type="checkbox" id="cuisine3" label="Thai" />
                    <StyledCustomInput type="checkbox" id="cuisine4" label="Caribbean" />
                </div>
            </FormGroup>
            <Link to="/signupName"><Button color="secondary">Back</Button>{' '}</Link>
            <Link to="/signupBudget"><Button color="success">Next</Button>{' '}</Link>
        </Form>
    </StyledUserPreferencesForm>
  );
}

export default UserPreferencesForm;