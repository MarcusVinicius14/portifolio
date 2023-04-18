import {Container,H1,H2,Space} from "./style" 

const string = `Me chamo Marcus Vinicius, sempre fui apaixonado e envolvido no mundo da tecnologia e 
mais recentemente me aventurei a entrar no mundo da programação e desenvolvimento Web. 
Possuo grande interesses em aprender novos conhecimentos e busco sempre evoluir, mantendo uma boa relação 
com os meus colegas de trabalho, recebo feedbacks e procuro sempre melhorar com eles. 
Atualmente tenho sólidos conhecimentos de front-end com tecnologias como: HTML, CSS, Javascript e React. 
Pretendo como próximo passo me especializar em back-end utilizando principalmente o Node. 
Possuo projetos já criado com aplicações reais como por exemplo landing Pages, conversor de moedas, login Pages entre outros. 
`
export function About() {
    return(
        <Container id="sobre">
            <H1>Sobre</H1>
            <Space/>
            <H2>{string}</H2>
            <H2><a href="https://github.com/MarcusVinicius14">https://github.com/MarcusVinicius14</a></H2>
        </Container>
    )
}