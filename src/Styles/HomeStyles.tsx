import styled from 'styled-components';

export const HomeDivBody = styled.div`
  @media (max-width: 550px) {
    
  }
`;

export const HomeHeader = styled.header`
  @media (max-width: 550px) {
    display: flex;
    height: 7vh;
    flex-flow: nowrap row;
    align-items: center;
    justify-content: space-between;
    button{
      margin: 0 20px;
      width: 30px;
      height: 30px;
      border-radius: 666px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
        border-radius: 666px;
      }
    }
  }
`;

export const HomeMain = styled.main`
  @media (max-width: 550px) {
    width: 100vw;
    height: 88vh;
    article{
      border-top: solid #151719 1px;
      border-bottom: solid #151719 1px;
      padding: 15px;
      width: 100%;
      min-height: 150px;
      display: flex;
      flex-flow: nowrap row;
      img{
        width: 40px;
        height: 40px;
        border-radius: 666px;
      }
    }
  }
`;

export const HomeFooter = styled.footer`
  @media (max-width: 550px) {
    height: 5vh;
  }
`;
