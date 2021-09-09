import React from 'react';
import PropTypes from 'prop-types';
import Style from './style';

function Output({ expression, fontColor, fontSize }) {
  return (
    <Style fontSize={fontSize} fontColor={fontColor}>
      {expression}
    </Style>
  );
}

Output.propTypes = {
  expression: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

export default Output;
