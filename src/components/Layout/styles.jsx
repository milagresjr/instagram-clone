import { styled } from "styled-components";

//SM - Side Menu
//SF - SECTION FEED

export const Container = styled.div`

    display: grid;
    
    grid-template-columns: 244px auto;
    grid-template-rows: 100vh;

    grid-template-areas:
    'SM SF';

    height: 100vh;

    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            grid-template-columns: 60px auto;
        }
    }

    @media screen and (max-width: 760px) {
        & {
            grid-template-columns: 0 auto;
        }
    }
    
`;