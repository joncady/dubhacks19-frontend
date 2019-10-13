import React from 'react';
import { Button } from 'reactstrap';
import { StyledMealHeader, StyledMealRow } from './style';
import MealCard from '../MealCard/MealCard';

export const MealRow = (props) => {
    let { meals, type } = props;
    return (
        <div>
            <StyledMealHeader>
                <h2>{type} Meal</h2>
                <Button color="success">Add people</Button>
            </StyledMealHeader>
            <StyledMealRow>
                {meals.map(meal => (<MealCard />))}
            </StyledMealRow>
        </div>
    )
};