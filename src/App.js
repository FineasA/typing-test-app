import React, { useState, useEffect } from 'react';
import TypingField from './components/TypingField';
import TextField from './components/TextField';
import Timer from './components/Timer'
import './App.css';

const App = () => {
  const defaultText =
    "news their research so administration futures I'm once shows told per added sell became Corp personal into yet user important toward";

  const defTextSplit = defaultText.split(' ');
  // const charTextSplit = defaultText.split('');
  // console.log(defTextSplit);

  const [wordTyped, setWordTyped] = useState('');
  const [currentWordStep, setCurrentWordStep] = useState(0);
  const [isCurrentlyCorrect, setCurrentlyCorrect] = useState(false);
  const [fullyCorrect, setFullyCorrect] = useState(false);
  const [isTyping, setIsTyping] = useState(false);


  const currentStep = () => {
    console.log('current word: ', defTextSplit[currentWordStep]);
    let wordToAchieve = defTextSplit[currentWordStep];
    if (wordTyped === wordToAchieve) {
      setCurrentlyCorrect(true);
    }
    fullyCorrectFunction();
    afterWordCorrect();
  };

  const fullyCorrectFunction = () => {
    if (
      isCurrentlyCorrect === true &&
      wordTyped.substr(wordTyped.length - 1) === ' '
    ) {
      setFullyCorrect(true);
      setWordTyped('');
    }
  };

  const afterWordCorrect = () => {
    if (fullyCorrect === true) {
      setCurrentWordStep(currentWordStep + 1);
      console.log(currentWordStep);
      console.log(defTextSplit[currentWordStep]);
      setFullyCorrect(false);
      setCurrentlyCorrect(false);
    }
  };

  useEffect(() => {
    currentStep(currentWordStep);
  });

  // * HANDLERS

  const handleTyping = e => {
    setIsTyping(true);
    setWordTyped(e.target.value);
    console.log(wordTyped);
  };

  return (
    <div className='App'>
      <TextField
        default={defTextSplit}
        currentlyCorrect={isCurrentlyCorrect}
        currentStep={currentWordStep}
      />
      <TypingField typingFxn={handleTyping} correct={fullyCorrect} />
      <Timer typingAction={isTyping}/>
    </div>
  );
};

export default App;
