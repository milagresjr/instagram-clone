import { styled } from "styled-components";

export const Container = styled.div`
 
    padding-bottom: 26px;

`;

export const Title = styled.div`

    width: 319px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;
    margin: 25px 0px 10px;

    & > h2 {
        color: var(--text-secondary);
        font-size: 14px;
    }

    & > button {
        border: none;
        background: none;
        outline: none;
        color: var(--text-primary);
        font-size: var(--font-default);
        font-weight: bold;
        cursor: pointer;
    }

`;