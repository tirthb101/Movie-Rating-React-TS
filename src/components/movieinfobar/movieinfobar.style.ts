import styled from 'styled-components';


export const Wrapper = styled.div`
    background: var(--darkGrey);
    display: flex;
    align-items: center;
    min-height: 100px;
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    width: 100%;

    .column {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--medGrey);
        border-radius: 20px;
        margin: 0 20px;
        flex: 1;

        :first-child {
            margin-left: 0px;
        }
        
        :last-child {
            margin-right: 0px;
        }


       
    }

    @media screen and (max-width: 768px) {
        display: block;

        .column {
            margin: 20px 0px;
        }
    }
`;