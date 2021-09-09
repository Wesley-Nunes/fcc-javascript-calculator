import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BotContainer, MidContainer, TopContainer } from './components';

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
      <ButtonsContainer />
    </>
  );
}

export default App;
