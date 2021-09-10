import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ButtonValueContext = createContext('');

function ButtonValueProvider({ children }) {
  const [value, setValue] = useState('0');

  function getButtonValue() {
    return value;
  }
  function setButtonValue(btnValue) {
    return setValue(btnValue);
  }
  function resetValues() {
    return setValue('');
  }

  const contextPublicMethods = {
    getButtonValue,
    setButtonValue,
    resetValues,
  };

  return (
    <ButtonValueContext.Provider value={contextPublicMethods}>
      {children}
    </ButtonValueContext.Provider>
  );
}

ButtonValueProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

function useButtonValue() {
  return useContext(ButtonValueContext);
}

export { ButtonValueProvider, useButtonValue };
