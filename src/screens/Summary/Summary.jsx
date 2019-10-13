import React from 'react';
import { StyledSummary, StyledH1, StyledH2, SuggestionRow } from './style';
import SummaryChart from '../../components/SummaryChart/SummaryChart';
import SummaryPraise from '../../components/SummaryPraise/SummaryPraise';
import SuggestedInvestmentCard from '../../components/SuggestedInvestmentCard/SuggestedInvestmentCard';


const Summary = (props) => {
  
    let { expenditure, currency } = props;
    let total = 0;
    for(var i = 0; i < expenditure.length; i++) {
        total += expenditure[i];
    }
    let avg = total / expenditure.length;
    return (
        <StyledSummary>
            <StyledH1>Weekly Expenditure</StyledH1>
            <SummaryChart expenditure={expenditure} />
            <SummaryPraise averageExpenditure={avg} currency={currency}/>
            <StyledH2>Suggested Investments:</StyledH2>
            <SuggestionRow>
                <SuggestedInvestmentCard img="img/stash.png" description="Stash allows you to put your money to work and can help you build wealth over time."/>
                <SuggestedInvestmentCard img="img/fundrise.png" description="Minimum costs, a tech-native experience, and historical annual return of 9.7 - 12.4%."/>
            </SuggestionRow>



        </StyledSummary>
    );
}

export default Summary;