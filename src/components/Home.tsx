import React from "react";

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

// API


// Components
import Hero from './hero/Heroimage.index';
import Grid from "./grid/grid.index";
import Thumb from "./thumb/thumb.index";
import SpinnerI from "./spinner/spin.index";
import Searchbar from "./searchbar/search.index";
import Button from "./button/button.index";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NOIMAGE from "../images/no_image.jpg";


const Home : React.FC = () => {
    const { state, loading, error, searchTerm , setSearchTerm, setIsLoadingMore } = useHomeFetch();

    if (error) return <div>Something Went Wrong</div>;
    if (loading) return <SpinnerI />;


    return(
        <>
        {state.results[0] ? 
        (<Hero 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview} />) 
        : null}

        <Searchbar setSearchTerm={setSearchTerm} />

        <Grid header={searchTerm ? "Search results":"Popular movies"}>
            {state.results.map(movie => (
                <Thumb 
                image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NOIMAGE} 
                key={movie.id}
                movieID={movie.id}  
                clickable={true} 
                />
            ))}
        </Grid>

        {loading ? <SpinnerI /> : null}
        
        {state.page < state.total_pages && !loading ? 
        <Button text="Load more"  callback={() => setIsLoadingMore(true)}/> : null
        }
        </>
    
)};

export default Home;