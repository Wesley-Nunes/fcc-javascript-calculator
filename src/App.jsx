import React from 'react';
import GlobalStyles from './GlobalStyles';
import {
  BotContainer, MidContainer, TopContainer, History, Current,
} from './components';

function Display() {
  return (
    <>
      <History />
      <Current />
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
      <Display />
      <ButtonsContainer />
    </>
  );
}

export default App;
