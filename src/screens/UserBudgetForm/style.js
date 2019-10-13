import styled from 'styled-components';
import { Label, FormGroup } from 'reactstrap'

export const StyledUserBudgetForm = styled.div`
    background-image: url("img/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: auto;
    height: 100vh;
    padding-left: 10%;
    padding-right: 10%;
`;

export const StyledH1 = styled.h1`
    color: white;
    font-size: 20px;
    text-align: left;
    padding-top: 20%;
`;

export const StyledLabel = styled(Label)`
    color: white;
    font-size: 18px;
`;

export const StyledFormGroup = styled(FormGroup)`
    padding-top: 10%;
`;