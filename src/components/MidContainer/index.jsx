import React from 'react';
import NumbersContainer from '../NumbersContainer';
import ActionsContainerTwo from '../ActionsContainerTwo';
import Style from './style';

function MidContainer() {
  return (
    <Style>
      <div>
        <NumbersContainer />
      </div>
      <div>
        <ActionsContainerTwo />
      </div>
    </Style>
  );
}

export default MidContainer;
