import React from 'react';
import Button from '../Button';

function ActionsContainerOne() {
  const values = [
    {
      name: 'C',
      width: '13rem',
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
    <Button key={value.name} buttonColor={value.buttonColor} width={value.width}>
      {value.name}
    </Button>
  ));
}

export default ActionsContainerOne;
