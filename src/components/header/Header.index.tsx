import React from 'react';

import { Link } from 'react-router-dom';

import { Wrapper, Content, Logoimg, RMDBlogoimg} from './Header.styles';

import  RMDBLogoimgSVG  from "../../images/react-movie-logo.svg";
import  LogoimgSVG  from "../../images/tmdb_logo.svg";


const Header : React.FC = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <RMDBlogoimg src={RMDBLogoimgSVG} alt="rmdb-logo" />
            </Link>
                <Logoimg src={LogoimgSVG} alt="tmdb-logo" />
        </Content>
    </Wrapper>
);

export default Header;