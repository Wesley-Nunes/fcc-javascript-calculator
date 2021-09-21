import React from 'react';
import PropTypes from 'prop-types';
import Output from '../Output';

function History({ value }) {
  return <Output expression={value} fontSize="2rem" fontColor="hsl(175, 57%, 48%)" />;
}

History.propTypes = {
  value: PropTypes.string.isRequired,
};

export default History;
