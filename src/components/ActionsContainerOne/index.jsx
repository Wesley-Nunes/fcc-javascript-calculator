import React from 'react';
import Button from '../Button';

function ActionsContainerOne() {
  const values = [
    {
      name: 'C',
    },
    {
      name: '+/-',
    },
    {
      name: '%',
    },
    {
      name: '+',
      buttonColor: 'hsl(183, 68%, 16%)',
    },
  ];

  return values.map((value) => (
    <Button key={value.name} buttonColor={value.buttonColor}>
      {value.name}
    </Button>
  ));
}

export default ActionsContainerOne;
