import React from 'react';
import { Box, Price, Currency } from './style';

const SummaryPraise = (props) => {

    let { averageExpenditure, currency } = props;

	return (
		<div>
            <Box>
                <img style={{width: "25%", height: "25%", padding: "3%"}} src="img/target.png"/>
                <div>
                    <p>Nice work! On average this week you spent:</p>
                    <Price>${props.averageExpenditure} </Price>
                    <Currency>{props.currency}</Currency>
                </div>
            </Box>

        </div>
	);
};

export default SummaryPraise;