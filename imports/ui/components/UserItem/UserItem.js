import React from 'react';
import { instanceOf, string, func } from 'prop-types';
import { connect } from 'react-redux';

import {
  CallCenterItemWrapper, ActionButtons
} from '../CallCenterItem/styles';

import {
  AvatarUser, UserDescription, UserFullName, UserInfo, UserLeadStats
} from '../../layouts/TopNavBar';

const UserInfoExtended = UserInfo.extend`
  &:after {
    content: none;
  }
`;

const UserFullNameExtended = UserFullName.extend`
  color: var(--zigvy-col-dark);
  font-family: "Proxima Nova Lt";
  line-height: 1.5;
`;

const UserLeadStatsExtended = UserLeadStats.extend`
  color: var(--zigvy-col-extra-light-grey);
  font-size: 14px;
`;

const UserItem = ({ user, selectedCallCenter, selectUserAction, selectedUser }) => {
  const renderRoles = () => {
    const roles = user.getRolesByCallCenter(selectedCallCenter);
    if (roles) {
      return roles.join(' | ');
    }
    return 'none';
  };

  return (
    <CallCenterItemWrapper
      onClick={() => { selectUserAction(user._id); }}
      className={`${selectedUser === user._id && 'selected'}`}
    >
      <UserInfoExtended>
        <AvatarUser>
          <img src="/images/avatar-1.jpg" alt="user call center" />
        </AvatarUser>
        <UserDescription>
          <UserFullNameExtended>{user.getFullName()}</UserFullNameExtended>
          <UserLeadStatsExtended>{renderRoles()}</UserLeadStatsExtended>
        </UserDescription>
      </UserInfoExtended>

      <ActionButtons>
        <i className="icon-icon-caret-right" />
      </ActionButtons>
    </CallCenterItemWrapper>
  );
};

UserItem.propTypes = {
  user: instanceOf(Object).isRequired,
  selectedCallCenter: string.isRequired,
  selectedUser: string.isRequired,
  selectUserAction: func.isRequired
};

UserItem.defaultProps = {};

const mapStateToProps = state => ({
  selectedUser: state.management.get('selectedUser')
});

export default connect(
  mapStateToProps,
  null
)(UserItem);
