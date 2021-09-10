import React from 'react';
import PropTypes from 'prop-types';
import Output from '../Output';

function Current({ value }) {
  return <Output expression={value} fontSize="4.6rem" fontColor="white" />;
}

Current.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Current;
