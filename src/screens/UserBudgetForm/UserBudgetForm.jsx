import React from 'react';
import { StyledUserBudgetForm, StyledH1, StyledLabel, StyledFormGroup } from './style';
import { Button, Form, Input} from 'reactstrap';
import { Link } from "react-router-dom";

const UserBudgetForm = (props) => {
  let { onChange, currency, budget, calorieGoal } = props;
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
          <Input type="text" onChange={(e) => onChange("budget", e.currentTarget.value)} value={budget} name="text" id="userBudget" style={style} />
          <select onChange={(e) => onChange("currency", e.currentTarget.value)} value={currency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RMB">RMB</option>
          </select>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel for="exampleText">What's your daily calorie goal?</StyledLabel>
          <Input type="text" name="text" onChange={(e) => onChange("calorieGoal", e.currentTarget.value)} value={calorieGoal} id="userCalorieGoal" style={style} />
        </StyledFormGroup>
        <Link to="/signupPreferences"><Button color="secondary">Back</Button>{' '}</Link>
        <Link to="/meal">
          <Button color="success">Get Started</Button>{' '}
        </Link>
      </Form>
    </StyledUserBudgetForm>
  );
}

export default UserBudgetForm;