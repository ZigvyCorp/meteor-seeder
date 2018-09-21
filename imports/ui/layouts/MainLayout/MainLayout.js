import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import TopNavBar from '../TopNavBar';
import { PageWrapper } from './styles';

const MainLayout = ({ children }) => (
  <PageWrapper>
    <TopNavBar />
    {children}
    <ToastContainer />
  </PageWrapper>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
