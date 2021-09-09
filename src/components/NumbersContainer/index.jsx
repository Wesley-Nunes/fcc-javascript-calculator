import React from 'react';
import Button from '../Button';

function NumbersContainer() {
  const values = [
    {
      name: 7,
    },
    {
      name: 8,
    },
    {
      name: 9,
    },
    {
      name: 4,
    },
    {
      name: 5,
    },
    {
      name: 6,
    },
    {
      name: 1,
    },
    {
      name: 2,
    },
    {
      name: 3,
    },
  ];

  return values.map((value) => (
    <Button key={value.name}>
      {value.name}
    </Button>
  ));
}

export default NumbersContainer;
