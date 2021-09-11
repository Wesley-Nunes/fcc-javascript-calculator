import React from 'react';
import GlobalStyles from './GlobalStyles';
import StyledMain from './App.style';
import {
  BotContainer, MidContainer, TopContainer, History, Current,
} from './components';
import { ButtonValueProvider, useButtonValue } from './context/ButtonValue';
import handleMath from './utils/handleMath';

function Display() {
  const { getButtonValue } = useButtonValue();
  const currentValue = getButtonValue();

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
