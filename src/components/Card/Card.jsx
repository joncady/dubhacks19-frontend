import React from 'react';
import { Button } from '../Button/Button';
import { StyledCard } from './style';

function Card(props) {

    const { title, content } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <Button onClick={() => console.log("test")} text={"CLOSE"} />
        </div>
    );

}

export default Card;