import { styled } from "styled-components";

import { BiMoviePlay } from 'react-icons/bi';

import { MdHome } from 'react-icons/md';

import { IoPaperPlaneOutline } from 'react-icons/io5';

import{ BsCompass, BsPlusSquare } from 'react-icons/bs';


export const Container = styled.div`
    width: 100%;
    height: 48px;
    display: none;
    justify-content: space-around;
    align-items: center;  
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid var(--color-avatar);
    z-index: 1000;

    /** MOBILE */
    @media screen and (max-width: 760px){
        
        & {
            display: flex;
        }
        
    }
`;
export const HomeIcon = styled(MdHome)`
    width: 24px;
    height: 24px;
`;
export const ExplorerIcon = styled(BsCompass)`
    width: 24px;
    height: 24px;   
`;
export const ReelsIcon = styled(BiMoviePlay)`
    width: 24px;
    height: 24px;   
`;
export const MessageIcon = styled(IoPaperPlaneOutline)`
    width: 24px;
    height: 24px;   
`;
export const CreateIcon = styled(BsPlusSquare)`
    width: 24px;
    height: 24px;   
`;
export const Avatar = styled.div`
    background: var(--color-avatar);
    width: 24px;
    height: 24px;   
    border-radius: 50%;
`;