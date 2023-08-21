import { styled } from "styled-components";

import { IoEllipsisHorizontal, IoChatbubbleOutline, IoPaperPlaneOutline, IoHeartOutline, IoBookmarkOutline } from 'react-icons/io5';


export const Container = styled.div`
    /*background: red;*/
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--text-secondary);
    margin: 35px 110px;
    & > h2.traducao {
        font-size: 12px;
        cursor: pointer;
    }
    & > h2.seeComment {
        font-size: 12px;
        color: var(--text-secondary);
        font-weight: 550;
        margin: 6px 0px;
        cursor: pointer;
    }
    @media screen and (min-width: 0px) and (max-width: 400px){
           & {
            margin: 5px 10px;
           }
    }
    /** MOBILE */
    @media screen and (max-width: 760px) {
        & {
            margin: 5px 10px;
        }
    }
`;
export const  Header = styled.div`
    width: 100%;
    height: 45.97px;
    padding: 0px 0px 12px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.username {
            color: blue;
    }
   
`;
export const Head = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    
`;

export const  Avatar = styled.div`
    width: 32px;
    height: 32px;
    background: var(--color-avatar);
    border-radius: 50%;
    flex-shrink: 0;
`;

export const ContentHead = styled.div`
    display: flex;
    flex-direction: column;
    & > h2 {
        font-size: 14px;
        font-weight: 600;
        .divider {
            margin-inline: 2px;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            flex-shrink: 0;
            color: var(--text-secondary);
        }
        .time {
            color: var(--text-secondary);
            font-weight: normal;
        }
    }
    & > h3 {
        font-size: 12px;
        font-weight: normal;
    }
`;

export const Divider = styled.div`

`;
export const  MenuIcon = styled(IoEllipsisHorizontal)`
    cursor: pointer;
    width: 23px;
    height: 23px;
`;
export const  ImgPost = styled.div`
    width: 100%;
    height: 400px;
    background: var(--color-avatar);
`;
export const  PostOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4px 0px;
    .opc {
        display: flex;
        justify-content: space-between;
    }
`;
export const  CurtirIcon = styled(IoHeartOutline)`
    width: 23px;
    height: 23px;
    margin: 0px 4px 0px 0px;
`;
export const  CommentIcon = styled(IoChatbubbleOutline)`
    width: 23px;
    height: 23px;
    transform: rotate(-90deg);
    margin: 0px 4px;
`;

export const SendIcon = styled(IoPaperPlaneOutline)`
    width: 23px;
    height: 23px;
    margin: 0px 4px;
`;
export const  BookmarkIcon = styled(IoBookmarkOutline)`
    width: 23px;
    height: 23px;
`;
export const  CountCurtidas = styled.div`
    width: 100%;
    & > h2 {
        font-size: 12px;
    }
`;
export const  Legend = styled.div`
    width: 100%;
    margin-block: 6px;
    & > h2 {
        font-size: 14px;
        span {
            margin-left: 5px;
            font-weight: normal;
        }
    }
`;

export const InputComment = styled.textarea`
    
`;