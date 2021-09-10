import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import StyledMain from './App.style';
import {
  BotContainer, MidContainer, TopContainer, History, Current,
} from './components';
import { ButtonValueProvider, useButtonValue } from './context/ButtonValue';

function Display() {
  const { getButtonValue, resetValues } = useButtonValue();
  const currentValue = getButtonValue();

  function handleMath(value) {
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

  const current = handleMath(currentValue);

  return (
    <>
      <History />
      <Current value={current} />
    </>
  );
}

function ButtonsContainer() {
  return (
    <>
      <TopContainer />
      <MidContainer />
      <BotContainer />
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledMain>
        <ButtonValueProvider>
          <Display />
          <ButtonsContainer />
        </ButtonValueProvider>
      </StyledMain>
    </>
  );
}

export default App;
