import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';

const UserPreferencesForm = (props) => {
  return (
    <Form>
        <FormGroup>
            <Label for="exampleCheckbox">Diet Restrictions</Label>
            <div>
                <CustomInput type="checkbox" id="diet1" label="Vegetarian" />
                <CustomInput type="checkbox" id="diet2" label="Vegan" />
                <CustomInput type="checkbox" id="diet3" label="Pescetarian" />
            </div>
        </FormGroup>
        <FormGroup>
            <Label for="exampleCheckbox">Favorite Cuisines</Label>
            <div>
                <CustomInput type="checkbox" id="cuisine1" label="Italian" />
                <CustomInput type="checkbox" id="cuisine2" label="Chinese" />
                <CustomInput type="checkbox" id="cuisine3" label="Thai" />
                <CustomInput type="checkbox" id="cuisine4" label="Caribbean" />
            </div>
        </FormGroup>
        <Button color="secondary">Back</Button>{' '}
        <Button color="success">Next</Button>{' '}
    </Form>
  );
}

export default UserPreferencesForm;