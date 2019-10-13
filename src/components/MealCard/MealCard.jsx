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

const Example = (props) => {

	const { title, picture, description, calories } = props;
  	return (
    	<div style={{width: '40%' }}>
      		<Card>
        		<CardImg top src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
        		<CardBody>
          			<CardTitle>{title}</CardTitle>
          			<CardSubtitle>{calories}</CardSubtitle>
          			<CardText>{description}</CardText>
          			<Button onClick={() => console.log("closes card and selects mealplan")} text={"Select"} />
        		</CardBody>
      		</Card>
    	</div>
  	);
};

export default Example;