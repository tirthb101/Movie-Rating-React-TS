import styled from "styled-components";

type Props = {
    image : string;
}

export const Wrapper = styled.div<Props>`
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, 0)
        41%, rgba(0, 0, 0, 0.65)
        100%, rgba(0, 0, 0, 1)
    ),
    url(${({image}) => image}), var(--darkGrey);

    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animationheroimage;
    animation-duration: 1s;

    @keyframes animationheroimage {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    position: absolute;
    bottom: 40px;
    max-width: 700px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--White);


    h1 {
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);

         @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }
`;