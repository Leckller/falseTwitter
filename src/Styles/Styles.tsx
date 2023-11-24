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
