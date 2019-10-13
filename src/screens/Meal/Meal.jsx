import React from 'react';
import { MealRow } from '../../components/MealRow/MealRow';

export default class Meal extends React.Component {

    render() {
        let {} = this.props;
        return (
            <div>
                <header></header>
                <MealRow></MealRow>
            </div>
        );
    }

}