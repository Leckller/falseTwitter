import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: white;
  font-size: calc(.9rem + 1px);
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
  @media (max-width: 550px) {
    width: 100%;
    left: 0;
    div:nth-child(3) {
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
  }
`;

type HomeStyleType = {
  close: boolean,
};

export const HomeStyle = styled.div<HomeStyleType>`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 100vw;
height: 100vh;
filter: ${(props) => (!props.close ? 'blur(0)' : 'blur(0)')};
header{
  padding-top: 20px;
  height: 100vh;
  width: 30vw;
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
    overflow-y: auto;
    overflow-x: hidden;
    width: calc(50% - 10px);
    /* min-width: 600px; */
    border: solid #151719 1px;
    div:nth-child(1){
      width: 100%;
      height: 150px;
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
    div:nth-child(2){
      article{
        padding: 10px;
        min-height: 120px;
        border-top: solid #151719 1px;
        border-bottom: solid #151719 1px;
        div:nth-child(1){
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          padding-bottom: 10px;
          a{ text-decoration: none; }
          justify-content: space-between;  
          height: 20px;;
        }
      }
    }
  }
  section:nth-child(2){
    width: 50%;
  }
}
  @media (max-width: 550px) {
    display: flex;
    flex-flow: nowrap column;
    header{
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-flow: nowrap row;
      justify-content: space-between;
      align-items: center;
      button{
        margin: 0 20px 20px 20px;
        border-radius: 9999px;
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        img{
          width: 100%;
          height: 100%;
          border-radius: 9999px;
        }
      }
    }
    main{
      width: 100%;
      height: 84vh;
      button{
        position: absolute;
        right: 15px;
        bottom: 10vh;
        border-radius: 9999px;
        width: 40px;
        height: 40px;
        border: none;
        background-color: #009dff;
        cursor: pointer;
      }
      article{
        width: 100%;
        padding: 10px;
        min-height: 120px;
        border-top: solid #151719 1px;
        border-bottom: solid #151719 1px;
        display: flex;
        flex-flow: nowrap row;
        img{
          margin-left: 10px;
          border-radius: 9999px;
          width: 30px;
          height: 30px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          margin-right: 10px;
        }
        div:nth-child(1){
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          padding-bottom: 10px;
          a{ text-decoration: none; }
          justify-content: space-between;  
          height: 20px;;
        }
      }
    }
    footer{
      width: 100%;
      height: 6vh;
      nav{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: nowrap row;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
`;
