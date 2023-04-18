import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px;
`

export const H1 = styled.p`
color: #ffffff;
font-weight: 400;
font-size: 30px;
`

export const Space = styled.div`
width: 175px;
height: 6px;
border-radius: 40px;
background-color: #2C66C3;
margin-bottom: 50px;
`

export const ContainerItems = styled.div`
display: grid;
Grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 20px;
`

export const Items = styled.div`
width: 200px;
height: 60px;
display: flex;
align-items: center;
justify-content: start;
border: 3px solid #293548;
border-radius: 10px;
gap: 10px;
padding-left: 10px;
`

export const Image = styled.img`
width: 50px;
height: 50px;
padding: 5px 0px;
`

export const H2 = styled.p`
color: #ffffff;
font-weight: 400;
font-size: 15px;
`