import React from "react";

import { Link } from 'react-router-dom';

import { Wrapper , Content } from "./smallcomp.style";

type Props = {
    movieTitle: string;
}


const Smallcomp : React.FC <Props> = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
            
        </Content>
    </Wrapper>
);

export default Smallcomp;