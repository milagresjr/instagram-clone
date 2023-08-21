import { styled } from "styled-components";

export const Container = styled.div`

    /*background: blue;*/
    width: 383px;
    height: 634px;
    padding: 0px 0px 0px 64px;

    /** TABLET */
    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            display: none;
        }
    }
    /** MOBILE */
    @media screen and (max-width: 760px) {
        & {
            display: none;
        }
    }

`;