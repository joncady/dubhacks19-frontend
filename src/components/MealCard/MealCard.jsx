import React from 'react';
import {
	CardImg, CardText
} from 'reactstrap';
import { StyledCardSubHeader, StyledCard, StyledCardBody, StyledPrice, StyledTitle } from './style';

export class MealCard extends React.Component {

	constructor() {
		super();
		this.state = {
			selected: false
		}
	}

	render() {
		const { title, picture, restaurant, price } = this.props;
		console.log(this.state.selected)
		return (
			<StyledCard onClick={() => (this.setState({ selected: !this.state.selected}))} selected={this.state.selected}>
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
	}
};

export default MealCard;