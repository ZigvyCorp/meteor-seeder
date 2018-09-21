import PropTypes from 'prop-types';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class AppWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    userDataHandlerLoading: PropTypes.bool.isRequired
  };

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.userDataHandlerLoading !== this.props.userDataHandlerLoading) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

const AppWrapperContainer = withTracker(() => {
  const userDataHandler = Meteor.subscribe('currentUserData');
  const userDataHandlerLoading = !userDataHandler.ready();
  return {
    userDataHandlerLoading
  };
})(AppWrapper);

export default AppWrapperContainer;
