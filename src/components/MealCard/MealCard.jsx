import React from 'react';
import { Button } from '../Button/Button';
import {
	CardImg, CardText
} from 'reactstrap';
import { StyledCardSubHeader, StyledCard, StyledCardBody, StyledPrice, StyledTitle } from './style';

const MealCard = (props) => {
	const { title, picture, restaurant, price } = props;
	return (
		<StyledCard>
			<CardImg top src={picture} alt={title} style={{ borderRadius: "4px" }} />
			<StyledCardBody>
				<StyledCardSubHeader>
					<StyledTitle>{title}</StyledTitle>
					<StyledPrice>${price}</StyledPrice>
				</StyledCardSubHeader>
				<CardText>{restaurant}</CardText>
			</StyledCardBody>
		</StyledCard>
	);
};

export default MealCard;