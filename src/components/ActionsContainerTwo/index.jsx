import React from 'react';
import Button from '../Button';

function ActionsContainerTwo() {
  const values = [
    {
      name: '-',
      buttonColor: 'hsl(183, 68%, 16%)',
    },
    {
      name: '*',
      buttonColor: 'hsl(183, 68%, 16%)',
    },
    {
      name: '/',
      buttonColor: 'hsl(183, 68%, 16%)',
    },
  ];

  return values.map((value) => (
    <Button key={value.name} buttonColor={value.buttonColor}>
      {value.name}
    </Button>
  ));
}

export default ActionsContainerTwo;
