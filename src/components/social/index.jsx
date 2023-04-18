import {Container,H1,H2,ContainerItems,Link,Space} from "./style"
import Linkedin from "../../assets/linkedin.svg"
import GitHub from "../../assets/github.svg"
import Email from "../../assets/email.svg"

export function Social() {

    const string = `telefone:(48) 98816-2810`
    return(<Container>
        <H1>Contato</H1>
        <Space/>
        <ContainerItems>

            <Link href="https://www.linkedin.com/in/marcus-vinicius-assun%C3%A7%C3%A3o-silva/" target="_blank">
                <img src={Linkedin}/>
            </Link>

            <Link href="https://github.com/MarcusVinicius14" target="_blank">
                <img src={GitHub}/>
            </Link>

            <Link href="https://mail.google.com/mail/u/1/#inbox" target="_blank">
                <img src={Email}/>
            </Link>

        </ContainerItems>
        <H2>{string}</H2>
    </Container>
)}