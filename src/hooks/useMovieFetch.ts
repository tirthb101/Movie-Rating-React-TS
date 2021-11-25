import { useEffect, useState } from "react";
import API, { cast, crew, Movie} from '../API';
import { isPersistedState, persistedState } from "../helpers";


export type moviestate = Movie & { actors : cast[]; directors: crew[];};



export const useMovieFetch  = (movieId : string ) => {
    const [state, setState] = useState<moviestate>( {} as moviestate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    


    useEffect(() => {
        const fetchdata = async () => {

                try {
                    setLoading(true);
                    setError(false);

                    const movie = await(API.fetchMovie(movieId));
                    const credits = await (API.fetchCredits(movieId));
                    const directors = credits.crew.filter(member => member.job === "Director");

                    setState({ 
                        ...movie,
                        actors: credits.cast,
                        directors
                    });

                    setLoading(false);
                }

                catch {
                    setError(true);
                    setLoading(false);
                }

        };

        const sessiondata = isPersistedState(movieId.toString());

        if (sessiondata) {
            setState(sessiondata);
            setLoading(false);
            return;
        }

        fetchdata();
    }, [movieId]);


    useEffect(() => {
        persistedState(movieId.toString(), state);
    },[state, movieId]);


    return { state, loading, error}
}

