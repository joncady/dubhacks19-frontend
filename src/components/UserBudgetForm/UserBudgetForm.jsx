import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';

const UserBudgetForm = (props) => {
  return (
    <Form>
        <FormGroup>
            <Label for="exampleText">What's your daily budget?</Label>
            <Input type="text" name="text" id="userBudget" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">What's your daily calorie goal?</Label>
            <Input type="text" name="text" id="userCalorieGoal" />
        </FormGroup>
        <Button color="secondary">Back</Button>{' '}
        <Button color="success">Get Started</Button>{' '}
    </Form>
  );
}

export default UserBudgetForm;