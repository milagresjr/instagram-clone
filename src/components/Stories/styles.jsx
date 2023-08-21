import { styled } from "styled-components";

export const Container = styled.div`

    width: 630px;
    height: 101px;
    padding: 8px 0px;

    /** TABLET */
    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            padding: 8px 80px;
        }
    }
    /** MOBILE */
    @media screen and (max-width: 760px) {
        & {
            padding: 8px 10px;
        }
    }
    @media screen and (min-width: 0px) and (max-width: 400px){
           & {
            padding: 8px 10px;
           }
    }

`;
export const StoriesList = styled.div`
  
    width: 100%;
    height: 85px;
    display: flex;
    gap: 20px;
    /** TABLET */
    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            gap: 10px;
            flex-wrap: wrap;
        }
    }
    /** MOBILE */
    @media screen and (max-width: 760px) {
        & {
            gap: 10px;
        }
    }

`;
export const Content = styled.div`

    width: 64px;
    height: 84px;
    padding: 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;
export const BorderColorid = styled.div`

    width: 66px;
    height: 66px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e6683c;

`;
export const Avatar = styled.div`

    width: 56px;
    height: 56px;
    background: var(--color-avatar);
    border-radius: 50%;

`;
export const UserName = styled.div`

    font-size: 12px;
    text-align: center;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`;





























