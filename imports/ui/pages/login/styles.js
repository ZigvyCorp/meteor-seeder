import styled from 'styled-components';
import { DashboardContentWrapper } from '../home/styles';


export const LoginContentWrapper = DashboardContentWrapper.extend` 
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  align-items: center;
`;

export const TopBanner = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -5px 50px 0px #00000020;
`;

export const TopBannerText = styled.div`
font-family: 'Proxima Nova Lt';
text-transform: uppercase;
margin-left: 8px;
letter-spacing: 1px;
`;
