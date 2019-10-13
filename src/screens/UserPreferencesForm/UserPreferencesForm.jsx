import React from 'react';
import { StyledUserPreferencesForm, StyledH1, StyledLabel, StyledCustomInput } from './style';
import { Button, Form, FormGroup } from 'reactstrap';
import { Link } from "react-router-dom";


const editArray = (array, key, index, onChange) => {
    array[index] = array[index] === 1 ? 0 : 1;
    onChange(key, array);
}

const UserPreferencesForm = (props) => {
    let { dietRestrictions, cuisines, onChange } = props;
    return (
        <StyledUserPreferencesForm>
            <StyledH1>What's your diet preference?</StyledH1>
            <Form>
                <FormGroup>
                    <StyledLabel for="exampleCheckbox">Diet Restrictions</StyledLabel>
                    <div>
                        <StyledCustomInput type="checkbox" checked={dietRestrictions[0]} onChange={() => editArray(dietRestrictions, "dietRestrictions", 0, onChange)} id="diet1" label="Vegetarian" />
                        <StyledCustomInput type="checkbox" checked={dietRestrictions[1]} onChange={() => editArray(dietRestrictions, "dietRestrictions", 1, onChange)} id="diet2" label="Vegan" />
                        <StyledCustomInput type="checkbox" checked={dietRestrictions[2]} onChange={() => editArray(dietRestrictions, "dietRestrictions", 2, onChange)} id="diet3" label="Pescetarian" />
                    </div>
                </FormGroup>
                <FormGroup>
                    <StyledLabel for="exampleCheckbox">Favorite Cuisines</StyledLabel>
                    <div>
                        <StyledCustomInput type="checkbox" checked={cuisines[0]} onChange={() => editArray(cuisines, "cuisines", 0, onChange)} id="cuisine1" label="Italian" />
                        <StyledCustomInput type="checkbox" checked={cuisines[1]} onChange={() => editArray(cuisines, "cuisines", 1, onChange)} id="cuisine2" label="Chinese" />
                        <StyledCustomInput type="checkbox" checked={cuisines[2]} onChange={() => editArray(cuisines, "cuisines", 2, onChange)} id="cuisine3" label="Thai" />
                        <StyledCustomInput type="checkbox" checked={cuisines[3]} onChange={() => editArray(cuisines, "cuisines", 3, onChange)} id="cuisine4" label="Caribbean" />
                    </div>
                </FormGroup>
                <Link to="/signupName"><Button color="secondary">Back</Button>{' '}</Link>
                <Link to="/signupBudget"><Button color="success">Next</Button>{' '}</Link>
            </Form>
        </StyledUserPreferencesForm>
    );
}

export default UserPreferencesForm;