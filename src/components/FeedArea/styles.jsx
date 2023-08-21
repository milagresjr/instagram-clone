import { styled } from "styled-components";

export const Container = styled.div`

    width: 630px;
    padding: 15px 0px;
    /*background: green;*/

    /** MOBILE */
    @media screen and (max-width: 760px){
        
        & {
            padding: 50px 0px;
            width: 480px;
        }
        
    }
    @media screen and (min-width: 0px) and (max-width: 400px){
           & {
            width: 330px;
           }
    }
    

`;