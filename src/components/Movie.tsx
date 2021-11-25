import React from "react";
import { useParams } from "react-router";


import Grid from './grid/grid.index';
import Actor from './actor/actor.index';
import Spinner from './spinner/spin.index';
import Smallcomp from "./smallcomp/smallcomp.index";
import MovieInfo from "./MovieInfo/movieinfo.index";
import Movieinfobar from "./movieinfobar/movieinfobar.index";

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import NOIMAGE from '../images/no_image.jpg';

import { useMovieFetch } from "../hooks/useMovieFetch";



const Movie : React.FC  = () => {
    let { movieId } = useParams();
    if (!movieId) {
        movieId = ""
    } 
    const { state:movie , loading, error} = useMovieFetch(movieId);


    if (loading || movie.directors === undefined) return <Spinner />;
    if (error) return <div>Something went wrong</div>;

    return (
        <>
        <Smallcomp movieTitle={movie.original_title} />
        <MovieInfo movie={movie}/>
        <Movieinfobar 
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
        />
        <Grid header="Actors">
            {movie.actors.map(actor => (
                <Actor 
                key={actor.credit_id}
                name={actor.name}
                character={actor.charactor}
                imageurl={
                    actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` :NOIMAGE
                } 
                />
            ))}
        </Grid>
        </>
        );
}


export default Movie;