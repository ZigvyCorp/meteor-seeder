import React from 'react';

import { ErrorWrapper } from './styles';

const FormError = ({ children, ...otherProps }) => (
  <ErrorWrapper
    {...otherProps}
  >
    {children}
  </ErrorWrapper>
);

export default FormError;
