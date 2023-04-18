import { 
    Container, 
    ContainerProjects, 
    Project, 
    Project2,
    Project3,
    Project4,
    Text,
    Space,
    ContainerContent,
    H1,
    H2 } from "./style";
import Print from "../../assets/print1.jpeg"
import Print2 from "../../assets/print2.jpeg"
import Print3 from "../../assets/print3.jpeg"
import Print4 from "../../assets/print4.jpeg"


export function Projects() {
    return(
        <Container>
            <Text>Projetos</Text>
            <Space/>
            <ContainerProjects>

                <ContainerContent>
                <Project  src={Print}/>
                <H1>Instagram DevClub</H1>
                <H2 href="https://instagram-devclub-marcus.netlify.app/" target="_blank"> instagram-devclub-marcus.netlify.app</H2>
                </ContainerContent>

                <ContainerContent>
                <Project2 src={Print2}/>
                <H1>Conversor de moedas</H1>
                <H2 href="https://conversor-de-moedas-marcus.netlify.app/" target="_blank"> conversor-de-moedas-marcus.netlify.app</H2>
                </ContainerContent>

                <ContainerContent>
                <Project3 src={Print3}/>
                <H1>CodeBurguer</H1>
                <H2 href="https://code-burguer-marcus.netlify.app/" target="_blank"> code-burguer-marcus.netlify.app</H2>
                </ContainerContent>

                <ContainerContent>
                <Project4 src={Print4}/>
                <H1>Clima em tempo real</H1>
                <H2 href="https://clima-em-tempo-real.netlify.app/" target="_blank"> clima-em-tempo-real.netlify.app</H2>
                </ContainerContent>
            </ContainerProjects>
            
        </Container>
    )
}