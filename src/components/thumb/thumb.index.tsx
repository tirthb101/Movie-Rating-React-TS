import React from "react";

import { Link } from "react-router-dom";

import { Image } from "./thumb.style";


type Props = {
    image: string;
    movieID?: number;
    clickable: boolean;
}



const Thumb : React.FC <Props> = ({image, movieID, clickable}) => (
    <div>
        {!clickable  ?
        (<Image src={image} alt="movie-image"/>) :
        (<Link to={`/${movieID}`}>
        <Image src={image} alt="movie-image"/>
        </Link>)}
    </div>
);



export default Thumb;