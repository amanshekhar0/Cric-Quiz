import React, { useState } from 'react';
import Quiz from './Quiz';
import IntroScreen from './IntroScreen';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
  };

  return (
    <div className="app">
      {quizStarted ? <Quiz /> : <IntroScreen onStart={handleStart} />}
    </div>
  );
}

export default App;