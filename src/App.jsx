import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import StyledMain from './App.style';
import {
  BotContainer, MidContainer, TopContainer, History, Current,
} from './components';
import { ButtonValueProvider, useButtonValue } from './context/ButtonValue';

function Display() {
  const { getButtonValue } = useButtonValue();
  const currentValue = getButtonValue();

  function handleMath(value) {
    const [memoValue, setMemoValue] = useState({
      current: '',
      history: '',
    });

    useEffect(() => {
      const values = `${memoValue.current}${value.toString()}`;
      setMemoValue({
        current: values,
        history: '',
      });
    }, [value]);

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
