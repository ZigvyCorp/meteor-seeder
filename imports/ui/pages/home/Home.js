import React from 'react';

import { LeaderBoard, Statistics } from '../../components';
import { ActivityCallingContainer } from '../../containers';

import { DashboardContentWrapper, LeftSideBarWrapper, MainActivityWrapper } from './styles';

const Home = ({ ...props }) => (
  <DashboardContentWrapper>
    <LeftSideBarWrapper>
      <LeaderBoard />
      <Statistics />
    </LeftSideBarWrapper>

    <MainActivityWrapper>
      {/* <ActivityCalling /> */}
      {/* <ActivityFinished /> */}
      <ActivityCallingContainer {...props} />
    </MainActivityWrapper>
  </DashboardContentWrapper>
);

export default Home;
