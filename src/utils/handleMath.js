import { useState, useEffect } from 'react';
import { useButtonValue } from '../context/ButtonValue';

function handleMath(insertValue) {
  const { resetValues } = useButtonValue();
  const [memoValue, setMemoValue] = useState({
    current: '0',
    history: '',
  });
  const oldMemoValue = memoValue.current;
  let newMemoValue;
  let hasNewValue = false;

  function handleNumbers() {
    if (oldMemoValue === '0') {
      newMemoValue = insertValue;
    } else {
      newMemoValue = `${oldMemoValue}${insertValue}`;
    }
    hasNewValue = true;
  }

  if (typeof insertValue === 'number') {
    handleNumbers();
  }

  useEffect(() => {
    if (hasNewValue) {
      setMemoValue({
        current: newMemoValue.toString(),
        history: '',
      });
      resetValues();
    }
    hasNewValue = false;
  }, [hasNewValue]);

  return memoValue.current;
}

export default handleMath;
