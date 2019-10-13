import React from 'react';
import { Card, Button, CardImg, CardText} from 'reactstrap';
import { StyledCard, StyledCardText } from './style';

const SuggestedInvestmentCard = (props) => {

    let { img, description } = props;

    return (
        <StyledCard body>
            <CardImg style={{width: "auto", height: "30px", padding: "3%", margin: "auto"}} src={props.img} />
            <StyledCardText>{props.description}</StyledCardText>
            <Button color="success">Learn More</Button>
        </StyledCard>
    );
};

export default SuggestedInvestmentCard;