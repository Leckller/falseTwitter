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
      border-top: solid #151719 px;
      border-bottom: solid #151719 1px;
      padding: 15px;
      width: 100%;
      min-height: 120px;
      display: flex;
      flex-flow: nowrap row;
      button{
        background-color: transparent;
        border: none;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        cursor: pointer;
        img{
        width: 40px;
        height: 40px;
        border-radius: 666px;
      }
      }
    }
  }
`;

export const HomeButtonT = styled.button`
  position: absolute;
  right: 30px;
  bottom: 8vh;
  width: 50px;
  height: 50px;
  border-radius: 666px;
  background-color: #0088ff;
  font-weight: 600;
  border: none;
`;

export const HomeDivArticleLinks = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  padding: 3px 0;
  a{
    text-decoration: none;
  }
`;

export const HomeDivArticleText = styled.div`

`;

export const HomeFooter = styled.footer`
  @media (max-width: 550px) {
    height: 5vh;
  }
`;
