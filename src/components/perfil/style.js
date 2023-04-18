import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 30px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-right: 30px;
`;

export const ContainerAnimation = styled.div`
h3{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #2cb67d;
  font-weight: 400;
  font-size: 30px;
    transform: translate(-50%,-50%)
}

h3:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 0.3px #2C66C3
}

h3:nth-child(2) {
    color: #2C66C3;
    -webkit-text-stroke: 1px #2C66C3;
    animation: animation 3s ease-in-out infinite;
}

@keyframes animation {
    0%, 100%{
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 
            70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }
    50%{
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%,
        67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)
    }
}
`;

export const H2 = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 50px;
`;

export const H1 = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 30px;
`;


export const Img = styled.img`
`;
