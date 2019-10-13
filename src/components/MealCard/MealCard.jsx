import React from 'react';
import { Button } from '../Button/Button';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle
} from 'reactstrap';


// Each meal card uses the following props:
// title - name of the mealplan
// picture - picture of the mealplan
// description - description of the mealplan
// calories - calorie count of the mealplan 

const MealCard = (props) => {
	const { title, picture, restaurant, description, calories } = props;
	return (
		<Card>
			<CardImg top src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
			<CardBody>
				<CardTitle>{title}</CardTitle>
				<CardSubtitle>{calories}</CardSubtitle>
				<CardText>{description}</CardText>
				<Button onClick={() => console.log("closes card and selects mealplan")} text={"Select"} />
			</CardBody>
		</Card>
	);
};

export default MealCard;