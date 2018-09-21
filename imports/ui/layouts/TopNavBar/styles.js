import styled, { css } from 'styled-components';

export const TopNav = styled.div`
  background-image: linear-gradient(to bottom, #056aaa, #0663a1, #055c98, #05558f, #044e86);
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  min-height: 90px;
  max-width: 1690px;
  margin: 0 auto;
  @media(max-width: 1024px) {
    min-height: 70px;
  }
`;

export const LogoSite = styled.div`
  margin-right: 50px;
  img{
    max-width: 155px;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  ${({ right }) => right && css`
    justify-content: flex-end;
  `}
  
  ${({ left }) => left && css`
    justify-content: flex-start;
  `}
`;

export const NavItem = styled.div`
  color: var(--zigvy-col-light-blue);
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Proxima Nova Lt';
  padding: 0 15px;
  
  &:hover {
    color: var(--zigvy-col-extra-light);
    transition: color 0.5s ease;
  }
  
  ${({ right }) => right && css`
    padding: 0;
  `}
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
  position: relative;
  margin-right: 20px;
  text-transform: none;
  font-family: 'Proxima Nova Rg';
  &:after {
    content: '';
    position: absolute;
    background-image: linear-gradient(#649dc4 33%,rgba(255,255,255,0) 0%);
    background-position: right;
    background-size: 1px 3px;
    background-repeat: repeat-y;
    width: 1px;
    height: 50%;
    right: -20px;
  }
`;

export const SettingsTopNav = styled.div`
  color: #b0dcf8;
  font-size: 16px;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    i {
      color: red;
    }
  }
`;

export const AvatarUser = styled.div`
  margin-right: 13px;
  img {
    height: 40px;
    border-radius: 100%;
    width: 40px;
    background: #055d9c;
  }
`;

export const UserFullName = styled.div`
  font-size: 14px;
  color: #ffffff;
`;

export const UserLeadStats = styled.div`
  color: #bbe4fe;
  font-size: 11px;
`;

export const UserDescription = styled.div`
`;
