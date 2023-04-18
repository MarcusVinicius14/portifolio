import {Main, Container} from "./style"
import { Perfil } from "./components/perfil"
import { Projects } from "./components/projects"
import {About} from "./components/about"
import { Abilities } from "./components/abilities"
import { Social } from "./components/social"

function App() {

  return (
    <Main>
      <Container>
        <Perfil/>
        <About/>
        <Projects/>
        <Abilities/>
        <Social/>
      </Container>
    </Main>
  )
}

export default App
