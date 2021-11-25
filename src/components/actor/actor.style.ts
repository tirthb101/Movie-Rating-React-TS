import styled from "styled-components";


export const Wrapper = styled.div`
    background: var(--darkGrey);
    color: var(--white);
    border-radius: 20px;
    text-align: center;
    padding: 5px;

    h1 {
        margin: 10px 0 0 0 ;
    }

    p {
        margin: 5px 0 0 0;
    }
`;

export const Image = styled.img`
    width: 100%;
    display: block;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
`;