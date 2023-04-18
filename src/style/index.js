import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.3s ease;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;

}
`
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #161B22;
`

export const Container = styled.div`
width: 1366px;
height: 100%;
background-color: #111827;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 30px;
`