
import styled from 'styled-components';
import { Card } from 'reactstrap';

export const StyledCardSubHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledCard = styled(Card)`
    width: 45vw;
    flex: none;
    padding: 10px;
    border: ${props => props.selected ? '1px solid green !important' : 'none!important'};
    background-color: transparent!important;
`;

export const StyledCardBody = styled.div`
    padding: 5px 0;
`;

export const StyledPrice = styled.div`
    color: #58C077;
`;

export const StyledTitle = styled.div`
    font-weight: bold;
`;