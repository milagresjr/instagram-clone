import { styled } from "styled-components";
import { BiMoviePlay, BiSearch } from 'react-icons/bi';

import { MdHome } from 'react-icons/md';

import { IoPaperPlaneOutline, IoMenuOutline, IoLogoInstagram } from 'react-icons/io5';

import{ BsCompass, BsHeart, BsPlusSquare } from 'react-icons/bs';

export const Container = styled.div`

    grid-area: SM;
    background: var(--color-main);
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 12px 16px;
    position: fixed;
    width: 244px;

    /** TABLET */
    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            width: 60px;
            padding: 12px 0px 16px;
            align-items: center;
        }
    }

    /** MOBILE */
    @media screen and (max-width: 760px) {
        & {
            display: none;
        }
    }

`; 

export const Header = styled.div`

    padding: 25px 12px 16px;
    margin: 0 0 19px;
    /*background: green;*/

    & > img {
        width: 105px;
        /** TABLET */
        @media screen and (min-width: 765px) and (max-width: 1260px){
            & {
                display: none;
            }
        }

    }

`;

export const InstaIcon = styled(IoLogoInstagram)`
    display: none;
    width: 24px;
    height: 24px;

    /** TABLET */
    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            display: block;
        }
    }

    /** MOBILE */
    @media screen and (max-width: 760px) {
        & {
            display: block;
        }
    }

`;

export const Navigation = styled.div`
   /* background: red; */
    margin-bottom: 12px;
`;
export const ItemMenu = styled.div`
    
    width: 100%;
    height: 53px;
    padding: 12px;
    margin: 4px 0;
    /*background: blue;*/
    display: flex;
    align-items: center;
    border-radius: 4px;
    transition: all 0.5s;

    & > span {
        font-size: 16px;
        font-weight: 100;
        color: var(--text-primary);
        padding: 0px 0px 0px 16px;

        &.active {
            font-weight: 700;
        }
    }

    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            width: 48px;
            justify-content: center;
        }
        & > span {
            display: none;
        }
    }

    &:hover {
        background: var(--color-menu-hover);
        cursor: pointer;
        
        & > .icon {
            width: 26px;
            height: 26px;
            transition: 0.5s;
        }
    }

`;
export const HomeIcon = styled(MdHome)`
    width: 24px;
    height: 24px;
    @media screen and (min-width: 765px) and (max-width: 1260px){
        & {
            width: 240px;
        }
    }
    
`;
export const SearchIcon = styled(BiSearch)`
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
    transform: rotate(20deg);
`;
export const NotificationIcon = styled(BsHeart)`
    width: 24px;
    height: 24px;
`;
export const CreateIcon = styled(BsPlusSquare)`
    width: 24px;
    height: 24px;
    border-radius: 5px;
`;
export const Avatar = styled.span`
    width: 24px;
    height: 24px;
    background: var(--color-avatar);
    border-radius: 50%;
`;
export const MenuIcon = styled(IoMenuOutline)`
    width: 24px;
    height: 24px;
`;