import React from 'react';
import { MealRow } from '../../components/MealRow/MealRow';
import MealHeader from '../../components/MealHeader/MealHeader';
import { StyledMealContainer } from './style';
import { SquareLoader } from 'react-spinners';
export default class Meal extends React.Component {

    componentDidMount = () => {
        this.props.getData(1);
    }

    render() {
        let { meals, user, setBudget, budget } = this.props;
        return (
            <div>
                <MealHeader {...user} remainingBudget={budget} />
                <StyledMealContainer>
                    {meals ?
                        <div>
                            <MealRow type={"Morning"} meals={meals.mealsMorning} setBudget={setBudget}></MealRow>
                            <MealRow type={"Lunch"} meals={meals.mealsLunch} setBudget={setBudget}></MealRow>
                            <MealRow type={"Night"} meals={meals.mealsNight} setBudget={setBudget}></MealRow>
                        </div>
                        :
                        <div style={{ textAlign: "center", marginTop: '1em'}}>
                            <SquareLoader color={"#58C077"} />
                        </div>
                    }
                </StyledMealContainer>
            </div>
        );
    }

}