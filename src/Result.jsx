import React from 'react';

export default function Result({ correct, total }) {
  const comment = () => {
    if (correct.length >= 7) {
      return "Awesome! Keep it up";
    } else if (correct.length >= 5 && correct.length < 7) {
      return "Average performance";
    } else {
      return "Hatt NOOBDE ipl kid";
    }
  };

  return (
    <div className="result-container">
        <div className="congrats">
        <h2>Congrats! You have completed the quiz</h2>
        </div>
     
      <div className="remark">
        <h2>{comment()}</h2>
      </div>

      <div className="percentage">
        <h3>You have scored {(correct.length / total) * 100}%</h3>
      </div>
      <div className="summary">
        <div className='totalQuestion'>
          <h3>Total Questions:</h3>
          <p>{total}</p>
        </div>
        <div className='correctAnswer'>
          <h3>Correct Answers:</h3>
          <p>{correct.length}</p>
        </div>
        <div className='wrongAnswer'>
          <h3>Wrong Answers:</h3>
          <p>{total - correct.length}</p>
        </div>
      </div>
      <div className="end">
        <button onClick={() => window.location.reload()} className='playAgain'>Play Again</button>
      </div>
    </div>
  );
}
