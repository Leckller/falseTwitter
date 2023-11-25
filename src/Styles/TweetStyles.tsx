import styled from 'styled-components';

export const TweetDivBody = styled.div`
  button{
    cursor: pointer;
  }
  @media (max-width: 550px) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
  }
`;

export const TweetDivHeader = styled.div`
  @media (max-width: 550px) {
    display: flex;
    width: 100vw;
    height: 7vh;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    button {
      margin: 0 20px;
    }
    button:nth-child(1) {
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: none;
    }
    button:nth-child(2) {
      width: 100px;
      background-color: #0088ff;
      font-weight: 600;
      border: none;
      padding: 10px;
      border-radius: 10px;
    }
  }
`;

export const TweetDivText = styled.div`
  @media (max-width: 550px) {
    width: 100%;
    padding: 0 10px;
    label{
      textarea{
        height: 150px;
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
      }
    }
  }
  
`;

export const TweetDivForm = styled.div`
  @media (max-width: 550px) {
    width: 100%;
    form{
      width: 100%;
      label{
        cursor: pointer;
      }
      input{
        display: none;
      }
    }
  }
  
`;
