import React from 'react';
import PropTypes from 'prop-types';
import Style from './style';

function Button({
  fontColor, buttonColor, width, children,
}) {
  return (
    <Style
      type="button"
      fontColor={fontColor}
      buttonColor={buttonColor}
      width={width}
    >
      {children}
    </Style>
  );
}

Button.propTypes = {
  fontColor: PropTypes.string,
  buttonColor: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  fontColor: 'hsl(0, 0%, 100%)',
  buttonColor: 'hsl(196, 49%, 8%)',
  width: '6.4rem',
  children: 'error',
};

export default Button;
