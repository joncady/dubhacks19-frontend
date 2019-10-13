import React from 'react';
import { StyledUserBudgetForm, StyledH1, StyledLabel, StyledFormGroup, StyledButtonRow } from './style';
import { Button, Form, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

const UserBudgetForm = (props) => {

  let style = {
    backgroundColor: 'transparent',
    outline: '0',
    borderWidth: '0 0 2px',
    borderColor: 'white',
    color: 'white'
  };

  return (
    <StyledUserBudgetForm>
      <StyledH1>Almost done...</StyledH1>
      <Form>
          <StyledFormGroup>
              <StyledLabel for="exampleText">What's your daily budget?</StyledLabel>
              <Input type="text" name="text" id="userBudget" style={style}/>
              <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="RMB">RMB</option>
              </select>
          </StyledFormGroup>
          <StyledFormGroup>
              <StyledLabel for="exampleText">What's your daily calorie goal?</StyledLabel>
              <Input type="text" name="text" id="userCalorieGoal" style={style}/>
          </StyledFormGroup>
          <Link to="/signupPreferences"><Button color="secondary">Back</Button>{' '}</Link>
          <Button color="success">Get Started</Button>{' '}
      </Form>
    </StyledUserBudgetForm>
  );
}

export default UserBudgetForm;