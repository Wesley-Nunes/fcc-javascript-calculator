import React from 'react';
import PropTypes from 'prop-types';

function Button({ children }) {
  return <button type="button">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  children: 'error',
};

export default Button;
