import * as C from "./style"
import Css from "../../assets/css.svg"
import  Figma from "../../assets/figma.svg"
import Git from "../../assets/git.svg"
import Github from "../../assets/github.svg"
import Html from "../../assets/html.svg"
import Js from "../../assets/js.svg"
import Node from "../../assets/node.svg"
import React from "../../assets/react.svg"

export function Abilities() {
    return(
        <C.Container>
            <C.H1>Habilidades</C.H1>
            <C.Space/>
            <C.ContainerItems>
                <C.Items>
                    <C.Image src={React}/>
                    <C.H2> React</C.H2>
                </C.Items>

                <C.Items>
                    <C.Image src={Js}/>
                    <C.H2>JavaScript</C.H2>
                </C.Items>

                <C.Items >
                    <C.Image src={Node}/>
                    <C.H2>Node.js</C.H2>
                </C.Items>

                <C.Items>
                    <C.Image src={Css}/>
                    <C.H2>Css 3</C.H2>
                </C.Items>

                <C.Items>
                    <C.Image src={Html}/>
                    <C.H2>Html 5</C.H2>
                </C.Items>

                <C.Items>
                    <C.Image src={Github}/>
                    <C.H2>Github</C.H2>
                </C.Items>

                <C.Items>
                    <C.Image src={Git}/>
                    <C.H2>Git</C.H2>
                </C.Items>

                <C.Items>
                    <C.Image src={Figma}/>
                    <C.H2>Figma</C.H2>
                </C.Items>
            </C.ContainerItems>
        </C.Container>
    )
}