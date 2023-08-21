import { styled } from "styled-components";

export const Container = styled.div`
  
  width: 319px;
  height: 131px;
  margin: 0px 0px 8px;
  padding: 0px 16px;

`;

export const Content = styled.div`

  width: 287px;
  height: 131px;
  padding: 0px 0px 38px;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;


  & > div.links {
    width: 287px;
    height: 58px;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;

        & > :not(:last-child) {
        margin-right: 8px;
        }
  }

  & > div.links > a {
    text-decoration: none;
    line-height: 20px;
    color: var(--text-tertiary);

        &:hover {
            text-decoration: underline;
        }
  }

  & > p {
    text-transform: uppercase;
    font-size: 12px;
    color: var(--text-tertiary);
  }

`;

const links = [
    {
        desc: "Sobre"
    },
    {
        desc: "Ajuda"
    },
    {
        desc: "Imprensa"
    },
    {
        desc: "API"
    },
    {
        desc: "Carreiras"
    },
    {
        desc: "Privacidade"
    },
    {
        desc: "Termos"
    },
    {
        desc: "Localizacoes"
    },
    {
        desc: "Idioma"
    },
    {
        desc: "Meta Verified"
    },
]

function Footer() {
  return (

    <>
        <Container>
            <Content>
            <div className="links">
            {
                links.map((item) => {
                    return (
                        <a href="#">{item.desc}</a>
                    )
                })
            }
            </div>

            <p>&copy; 2023 Instagram from meta</p>
            </Content>
        </Container>
    </>

  );
}

export default Footer;