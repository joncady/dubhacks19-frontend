import styled from 'styled-components';
import { Input } from 'reactstrap';

export const StyledUserNameForm = styled.div`
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
    font-size: 30px;
    padding-top: 25%;
    padding-bottom: 15%;
`

export const InputSpacer = styled.div`
    padding-top: 10%;
`

export const ButtonSpacer = styled.div`
    padding-top: 10%;
    padding-left: 75%;
`

export const StyledInput = styled(Input)`
    outline: 0;
    border-width: 0 0 2px;
    border-color: blue;
`