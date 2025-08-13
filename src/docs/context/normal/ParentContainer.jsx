import React from 'react';
import ChildContainer from './ChildContainer';
import FontContext, { FontSizeProvider } from './FontContext';

const ParentContainer = () => {
  const value = {fontSize: "40px"}
  return (
    <div>
      <FontSizeProvider>
        <ChildContainer>

        </ChildContainer>
      </FontSizeProvider>
    </div>
  );
};

export default ParentContainer;