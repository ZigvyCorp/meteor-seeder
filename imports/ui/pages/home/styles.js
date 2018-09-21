import styled from 'styled-components';

export const DashboardContentWrapper = styled.div`
  display: flex;
  max-width: 1690px;
  margin: 0 auto;
  height: calc(100% - 90px);
  background-color: #fff;
  @media(max-width: 1024px){
    height: calc(100% - 70px);
  }
`;

export const LeftSideBarWrapper = styled.div`
  flex: 0 0 25%;
  border-right: 1px solid #c5c5c5;
  background: #fff;
  height: 100%;
  border-radius: 0 0 0px 10px;
`;

export const MainActivityWrapper = styled.div`
  background-color: #fff;
  box-shadow: inset 0px 20px 25px -20px #00000020;
  flex: 1 ;
  border-radius: 0 0 10px 0px;
`;
