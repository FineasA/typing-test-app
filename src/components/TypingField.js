import React, { useState } from 'react';

const inputStyling = {
  width: '65%'
};

const TypingField = props => {
  let type = 'text';
  if (props.correct === true) {
    type = 'reset';
  }

  return (
    <div>
      <input style={inputStyling} type={type} onChange={props.typingFxn} />
    </div>
  );
};

export default TypingField;
