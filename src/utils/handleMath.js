import { useState, useEffect } from 'react';
import { useButtonValue } from '../context/ButtonValue';

function handleMath(value) {
  const { resetValues } = useButtonValue();
  const [memoValue, setMemoValue] = useState({
    current: '0',
    history: '',
  });
  let isValueValid = false;
  let internalValue = value;

  if (typeof value === 'number') {
    if (memoValue.current === '0') {
      internalValue = value;
    } else {
      internalValue = `${memoValue.current}${value}`;
    }
    isValueValid = true;
  }

  useEffect(() => {
    if (isValueValid) {
      setMemoValue({
        current: internalValue.toString(),
        history: '',
      });
      resetValues();
    }
    isValueValid = false;
  }, [isValueValid]);

  return memoValue.current;
}

export default handleMath;
