import styled from 'styled-components';

export const PostDivBodyM = styled.div`
  width: 100vw;
  @media (max-width: 550px) {
    width: 100vw;
    height: 88vh;
    overflow-y: auto;
    overflow-x: hidden;
    article{
      border-top: solid #151719 1px;
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

export const PostDivComentsM = styled.div`
  article{
    padding: 20px;
  }
`;
