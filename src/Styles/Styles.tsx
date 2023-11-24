import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: white;
}
body{
  background-color: #000;
}
`;

export const TweetStyle = styled.div`
  position: absolute;
  left: 29vw;
  width: 22vw;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    label{
      padding: 10px;
      textarea{
        width: 100%;
        resize: none;
        background-color: transparent;
        border: none;
        outline: none;
        height: 150px;
      }
    }
  }
  form{
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10px;
    label{
      cursor: pointer;
      transition: 1000ms;
      &:hover{
        transition: 1000ms;
        border-radius: 10px;
        background-color: #ffffff22;
      }
    }
    input{
      display: none;
    }
  }
`;

type HomeStyleType = {
  close: boolean,
};

export const HomeStyle = styled.div<HomeStyleType>`
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
filter: ${(props) => (!props.close ? 'blur(0)' : 'blur(0)')};
header{
  padding-top: 20px;
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  nav{
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    a, button{
      cursor: pointer;
      text-decoration: none;
      padding: 10px;
      transition: 1000ms;
      &:hover{
        transition: 1000ms;
        border-radius: 10px;
        background-color: #ffffff22;
      }
    }
    button{
        background-color: transparent;
        border: none;
      }
  }
}
main{
  width: 70vw;
  display: flex;
  flex-direction: row;
  section:nth-child(1){
    width: 50%;
    border: solid #151719 1px;
    div:nth-child(1){
      width: 100%;
      height: 150px;
      border-bottom: solid #151719 1px;
      padding-top: 10px;
      label{
        padding: 10px;
        textarea{
          width: 100%;
          resize: none;
          background-color: transparent;
          border: none;
          outline: none;
          height: 150px;
        }
      }
    }
  }
}
`;
