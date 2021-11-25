import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    height: 50px;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;


    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-Width: 768px){
        font-size: var(--fontSmall);
        }
    }

    a {
        text-decoration: none;
    }

    a:hover, a:focus {
        opacity: 0.7;
        transform: scale(1.2);
    }

`;