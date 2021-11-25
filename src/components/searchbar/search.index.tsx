import React, { useState, useEffect, useRef} from "react";

import SEARCH_ICON from '../../images/search-icon.svg';

import { Wrapper , Content } from './search.style';

type Props = {
    setSearchTerm :React.Dispatch<React.SetStateAction<string>>;
}


const Searchbar : React.FC <Props> = ({setSearchTerm}) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        
        if(initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer); 
    },[setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={SEARCH_ICON} alt="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search" 
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
)};




export default Searchbar;
