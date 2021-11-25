import { useEffect, useState} from "react";
import { isPersistedState, persistedState} from "../helpers";


import API, { Movie} from '../API';

const initialstate = {
    page: 0,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0 
};

export const useHomeFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialstate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchmovies = async (page : number, searchTerm="") => {
        try {
            setLoading(true);
            setError(false);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                 page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

            setLoading(false);
        }
        catch (error){
            setError(true);
        };
    }

    useEffect(() => {
        if (!searchTerm) {
            const sessionData = isPersistedState('home');
            if(sessionData) {
                setState(sessionData);
                return;
            }
        }
        fetchmovies(1, searchTerm);
    }, [searchTerm]);


    useEffect(() => {
        if (!isLoadingMore) return;

        fetchmovies(state.page + 1, searchTerm)

        setIsLoadingMore(false);
    }, [searchTerm, isLoadingMore, setIsLoadingMore, state.page]);


    useEffect(() => {
        if(!searchTerm){
            persistedState('home', state);
        }
    },[searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};
}