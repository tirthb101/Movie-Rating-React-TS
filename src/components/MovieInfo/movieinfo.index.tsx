import React from "react";

import Thumb from '../thumb/thumb.index';

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NOIMAGE from '../../images/no_image.jpg';

import { Wrapper, Content, Text } from "./movieinfo.style";

import { moviestate } from "../../hooks/useMovieFetch";

type Props = {
    movie: moviestate;
}

const MovieInfo : React.FC <Props> = ({movie}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb  image={movie.poster_path ? 
                   `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NOIMAGE}
                    clickable={false}>
            </Thumb>
        
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>


                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                        {movie.directors.map(director => <p key={director.credit_id}>
                            {director.name}
                        </p>)}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);




export default MovieInfo;