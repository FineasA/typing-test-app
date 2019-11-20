import React from 'react';

const TextField = props => {
  const textDisplay = props.default.join(' ');
  const textArray = props.default;
  console.log(textArray);

  console.log(props.currentWordStep);
  let style = {
    color: 'red'
  };

  if (props.currentlyCorrect === true) {
    style = {
      color: 'green'
    };
  }

  return (
    <div style={outerDivStyle}>
      <span style={style}>{textArray[props.currentStep]} </span>
      {textArray.splice(props.currentStep + 1, textArray.length).join(' ')}
    </div>
  );
};

const outerDivStyle = {
  display: 'block'
};

export default TextField;
