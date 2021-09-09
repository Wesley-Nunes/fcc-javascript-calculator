import React from 'react';
import Output from '../Output';

function Current() {
  const defaultValue = '30';

  return <Output expression={defaultValue} fontSize="4.6rem" fontColor="white" />;
}

export default Current;
