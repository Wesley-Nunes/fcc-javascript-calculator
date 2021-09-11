import { useState, useEffect } from 'react';
import { useButtonValue } from '../context/ButtonValue';

function handleMath(insertValue) {
  const { resetValues } = useButtonValue();
  const [memoValue, setMemoValue] = useState({
    current: '0',
    history: '',
  });
  const isNumber = /[0-9]/.test(insertValue);
  const isValidSymbol = /[C*%+/-=.]/.test(insertValue);
  const oldMemoValue = memoValue.current;
  let hasNewValue = false;
  let newMemoValue;

  function handleNumbers() {
    if (oldMemoValue === '0') {
      newMemoValue = insertValue;
    } else {
      newMemoValue = `${oldMemoValue}${insertValue}`;
    }
    hasNewValue = true;
  }

  function handleSymbols() {
    const symbols = [
      { name: 'C', action: newMemoValue = '0' },
    ];

    function action(name) {
      const filtered = symbols.filter((s) => s.name === name);
      return filtered[0].action;
    }

    action(insertValue);

    hasNewValue = true;
  }

  if (isNumber) {
    handleNumbers();
  } else if (isValidSymbol) {
    handleSymbols();
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
