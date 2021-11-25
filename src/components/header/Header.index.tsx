import React, { useContext} from 'react';

import { Link } from 'react-router-dom';

import { Wrapper, Content, Logoimg, RMDBlogoimg} from './Header.styles';

import  RMDBLogoimgSVG  from "../../images/react-movie-logo.svg";
import  LogoimgSVG  from "../../images/tmdb_logo.svg";
import { Context } from '../../context';


const Header : React.FC = () => {

    const [ user ] = useContext(Context);
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <RMDBlogoimg src={RMDBLogoimgSVG} alt="rmdb-logo" />
                </Link>

                {user ? 
                    (<span>Logged in as: {user.username}</span>) 
                    : (<Link to="/login">Login</Link>)}
                
                <Logoimg src={LogoimgSVG} alt="tmdb-logo" />
               
            </Content>
        </Wrapper>
    )};

export default Header;