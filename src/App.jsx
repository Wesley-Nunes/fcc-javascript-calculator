import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import StyledMain from './App.style';
import {
  BotContainer, MidContainer, TopContainer, History, Current,
} from './components';
import { ButtonValueProvider, useButtonValue } from './context/ButtonValue';
import handleMath from './utils/handleMath';

function Display() {
  const { getButtonValue, resetValues } = useButtonValue();
  const currentValue = getButtonValue();
  const [value, setValue] = useState({
    current: '0',
    history: '',
  });
  const newValue = handleMath(value, currentValue);
  useEffect(() => {
    setValue(newValue);
    resetValues();
  }, [currentValue]);

  return (
    <>
      <History value={value.history} />
      <Current value={value.current} />
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
