import { styled } from "styled-components";
import { BsHeart } from "react-icons/bs";

export const Container = styled.div`
  
  width: 100%;
  position: fixed;
  height: 60px;
  padding: 0px 16px;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: none;

    /** MOBILE */
    @media screen and (max-width: 760px){
        
        & {
            display: flex;
        }
        
    }

  & > img {
        width: 105px;
        /** TABLET */
        @media screen and (min-width: 0px) and (max-width: 400px){
            display: none;
        }

    }

    @media screen and (min-width: 0px) and (max-width: 400px){
           & {
             display: flex;
           }
    }

`;
export const Content = styled.div`
  
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

`;
export const InputSearch = styled.input`
  
  width: 268px;
  height: 36px;
  padding: 0px 16px;
  border: none;
  background: #eee;
  border-radius: 5px;

  &::placeholder {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 16px;
  }

  @media screen and (min-width: 0px) and (max-width: 400px){
           & {
            width: 300px;
           }
    }

`;
export const NotificationIcon = styled(BsHeart)`
  
  width: 24px;
  height: 24px;
  position: relative;

  &::before {
    content: "oi";
    width: 30px;
    height: 30px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }

`;