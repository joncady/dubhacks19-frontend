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
        let { meals, user} = this.props;
        return (
            <div>
                <MealHeader {...user} />
                <StyledMealContainer>
                    {meals ?
                        <div>
                            <MealRow type={"Morning"} meals={meals.mealsMorning}></MealRow>
                            <MealRow type={"Lunch"} meals={meals.mealsLunch}></MealRow>
                            <MealRow type={"Night"} meals={meals.mealsNight}></MealRow>
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