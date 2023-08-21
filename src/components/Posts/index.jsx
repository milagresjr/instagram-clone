import { Container, Header, Head, Avatar, ContentHead,
MenuIcon, ImgPost, PostOptions, CurtirIcon, CommentIcon,
SendIcon, BookmarkIcon, CountCurtidas, Legend, InputComment  } from './styles';

import { listPost } from '../../PostList';

function Posts() {
  return (
        <>
        
            {
                listPost.map(item => {

                    return (

                        <Container>
                <Header>
                    <Head>
                        <Avatar />
                        <ContentHead>
                        <h2>{item.username}
                        <span className='divider'>-</span>
                        <span className='time'>{item.time}</span>
                        </h2>
                        <h3>{item.address}</h3>
                        </ContentHead>
                    </Head>
                    <MenuIcon />
                </Header>
                <ImgPost />
                <PostOptions>
                    <div className='opc'>
                    <CurtirIcon />
                    <CommentIcon />
                    <SendIcon />
                    </div>
                    <div>
                        <BookmarkIcon />
                    </div>
                </PostOptions>
                <CountCurtidas>
                    <h2>{item.totLikes} curtidas</h2>
                </CountCurtidas>
                <Legend>
                    <h2>
                        {item.username}
                    <span>
                        {item.legend}
                    </span>
                    </h2>
                </Legend>
                <h2 className='traducao'>Ver tradução</h2>
                <h2 className='seeComment'>Ver todos os {item.totComment} comentarios</h2>
                <InputComment placeholder="Adicione um comentario" />
            </Container>

                    )

                })
            }
        
        </>
  );
}

export default Posts;