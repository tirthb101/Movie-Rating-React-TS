import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    border-radius: 20px;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    animation: animatethumb 0.5s;

    @keyframes animatethumb {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;