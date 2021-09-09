import React from 'react';
import Output from '../Output';

function History() {
  const expression = '7*100-15/';

  return <Output expression={expression} fontSize="2rem" fontColor="hsl(175, 57%, 48%)" />;
}

export default History;
