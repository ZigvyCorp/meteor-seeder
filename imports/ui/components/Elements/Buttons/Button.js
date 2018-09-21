import React from 'react';
import { string } from 'prop-types';

import { ButtonStyled } from './styles';

const Button = ({ name, ...buttonProps }) => (
  <ButtonStyled
    {...buttonProps}
  >
    {name}
  </ButtonStyled>
);

Button.propTypes = {
  name: string
};

Button.defaultProps = {
  name: ''
};

export default Button;
