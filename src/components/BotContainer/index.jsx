import React from 'react';
import Button from '../Button';

function BotContainer() {
  const values = [
    {
      name: 0,
    },
    {
      name: '.',
    },
    {
      name: '=',
      buttonColor: 'hsl(175, 65%, 65%)',
      width: '12.8rem',
      fontColor: 'black',
    },
  ];

  return values.map((value) => (
    <Button
      key={value.name}
      fontColor={value.fontColor}
      buttonColor={value.buttonColor}
      width={value.width}
    >
      {value.name}
    </Button>
  ));
}

export default BotContainer;
