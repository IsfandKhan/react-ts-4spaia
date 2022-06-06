import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

let intervalId;
export default function App() {
  const [minute, setMinutes] = useState(null);
  const [second, setSeconds] = useState(null);

  useEffect(() => {
    if (second === 0) {
      if (minute !== 0) setMinutes((prev) => prev - 1);
      if (minute === 0 && second === 0) stopTimer();
      else setSeconds(59);
    }
  }, [second]);

  const startTimer = () => {
    intervalId = setInterval(() => setSeconds((prev) => prev - 1), 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  return (
    <div>
      <span>
        {minute || '00'}:{second || '00'}
      </span>
      <br />
      <input
        value={`${'0' + (minute || 0)}`}
        type="text"
        style={{ marginRight: '5px' }}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
      ></input>
      <input
        value={`${'0' + (second || 0)}`}
        type="text"
        style={{ marginRight: '5px' }}
        onChange={(e) => setSeconds(parseInt(e.target.value))}
      ></input>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
