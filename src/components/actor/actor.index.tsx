import React from "react";

import { Wrapper, Image } from "./actor.style";

type Props = {
    name: string;
    character: string;
    imageurl: string;
}


const Actor : React.FC <Props> = ({name , character, imageurl}) => (
    <Wrapper>
        <Image src={imageurl} alt="actor-thumbnail" />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);


export default Actor;