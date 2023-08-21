import { Container, StoriesList, Content, BorderColorid, Avatar, UserName } from './styles';

const nameUserStrories = [
    "cristiano",
    "alnassr",
    "franciscofranca",
    "eddytussasamuel",
    "sujeitoprogramador",
    "luciamendes"
];

function Stories() {
    return (
        <Container>

            <StoriesList>

                {
                    nameUserStrories.map(item => {
                        return (
                            <Content>
                                <BorderColorid>
                                    <Avatar />
                                </BorderColorid>
                                <UserName>{item}</UserName>
                            </Content>
                        )
                    })
            }

            </StoriesList>

        </Container>
    )
}

export default Stories;