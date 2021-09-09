import React from 'react';
import PropTypes from 'prop-types';

function Output({ expression }) {
  return (
    <div>
      {expression}
    </div>
  );
}

Output.propTypes = {
  expression: PropTypes.string.isRequired,
};

export default Output;
