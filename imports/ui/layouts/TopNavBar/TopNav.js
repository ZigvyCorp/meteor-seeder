import React from 'react';
import { Link } from 'react-router-dom';

import {
  TopNav,
  LogoSite,
  NavGroup,
  NavItem,
  UserInfo,
  SettingsTopNav,
  AvatarUser,
  UserDescription,
  UserFullName,
  UserLeadStats
} from './styles';

export const UserInfoLoggedIn = () => (
  <UserInfo>
    <AvatarUser>
      <img src="/images/avatar-1.jpg" alt="user call center" />
    </AvatarUser>
    <UserDescription>
      <UserFullName>Gilman Wolsey</UserFullName>
      <UserLeadStats>82 Leads closed</UserLeadStats>
    </UserDescription>
  </UserInfo>
);

const TopNavBar = () => (
  <TopNav>
    <LogoSite>
      <img alt="" src="/images/logo.svg" />
    </LogoSite>

    <NavGroup left>
      <NavItem>
        <Link to="/">
          Dashboard
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/management">
          Management
        </Link>
      </NavItem>
    </NavGroup>

    <NavGroup right>
      <UserInfoLoggedIn />

      <NavItem right>
        <SettingsTopNav>
          <Link to="/admin">
            <span className="icon-icon-settings" />
          </Link>
        </SettingsTopNav>
      </NavItem>
    </NavGroup>
  </TopNav>
);

export default TopNavBar;
