import { Container, ContainerText, H1, H2, Img,ContainerAnimation } from "./style";
import Computer from "../../assets/Computer.svg"
export function Perfil() {

    const string = "<>Desenvolvedor Web</>"
  return (
    <Container>
      <ContainerText>
        
        <H1>👋 Prazer, me chamo</H1>
        <H2>Marcus</H2>
        <ContainerAnimation>
          <h3>{string}</h3>
          <h3>{string}</h3>
        </ContainerAnimation>
      </ContainerText>
      <Img src={Computer}/>
    </Container>
  );
}
