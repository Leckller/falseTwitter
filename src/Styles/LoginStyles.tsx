import styled from 'styled-components';

export const LoginDivBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  position: relative;
  section{
    width: 350px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0088ff;
    border-radius: 50% 20% / 10% 40%;
    animation: borderRotate 2000ms alternate infinite;
    button{
      width: 80%;
      height: 10%;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: 700ms;
      box-shadow: 3px 3px 10px black;
      border-radius: 10px;
      &:hover {
        transition: 700ms;
      }
    }
  }
  @keyframes borderRotate {
    
  }
`;

export const LoginDivBg1 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  color: black;
  background-color: yellow;
  z-index: -1;
  left: -200px;
  bottom: 30vh;
  border-radius: 666px;
  animation: radiusVar 10000ms infinite;
  h1{
    color: black;
  } 
  @keyframes radiusVar {
    0%{
      margin-bottom: 5vh;
      margin-left: 0;
      background-color: yellow;
    }
    10%{
      margin-bottom: 10vh;
      margin-left: 10vw;
      background-color: yellow;
    }
    20%{
      margin-bottom: 5vh;
      margin-left: 20vw;
      background-color: yellow;
    }
    30%{
      margin-bottom: 10vh;
      margin-left: 30vw;
      background-color: yellow;
    }
    40%{
      margin-bottom: 5vh;
      margin-left: 40vw;
      background-color: yellow;
    }
    50%{
      margin-bottom: 10vh;
      margin-left: 55vw;
      background-color: yellow;
    }
    55%{
      background-color: green;
    }
    60%{
      margin-bottom: 5vh;
      margin-left: 70vw;
      background-color: green;
      content: "tchau";
    }
    70%{
      margin-bottom: 10vh;
      margin-left: 80vw;
      background-color: green;
    }
    80%{
      margin-bottom: 5vh;
      margin-left: 90vw;
      background-color: green;
    }
    90%{
      margin-bottom: 10vh;
      margin-left: 100vw;
      background-color: green;
    }
    100%{
      margin-bottom: 5vh;
      margin-left: 120vw;
      background-color: green;
    }
  }
`;

export const LoginDivBg2 = styled.div`
  width: 150px;
  height: 300px;
  position: absolute;
  top: 2vh;
  z-index: -10;
  transform: rotate(50deg);
  border-radius: 20px 50px;
`;
export const LoginDivBg3 = styled.div`

`;
export const LoginDivBg4 = styled.div`

`;
