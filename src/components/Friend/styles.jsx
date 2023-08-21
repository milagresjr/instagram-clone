import { styled } from "styled-components";

export const Container = styled.div`
  
    width: 315px;
    height: 60px;
    padding: 8px 16px;

`;
export const Content = styled.div`
  
    display: flex;
    align-items: center;

`;
export const Avatar = styled.div`
  
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--color-avatar);
    flex-shrink: 0;

`;
export const InfoProfile = styled.div`
  
    width: 287px;
    margin-left: 8px;

    & > h2 {
        font-size: 14px;
    }

    & > span {
        font-size: 14px;
        color: var(--text-secondary);
    }

`;
export const Button = styled.button`
  
    border: none;
    background: none;
    outline: none;
    color: var(--color-button);
    font-size: var(--font-default);
    font-weight: bold;
    cursor: pointer;

`;