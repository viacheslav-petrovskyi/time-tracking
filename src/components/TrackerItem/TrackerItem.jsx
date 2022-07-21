import React, { useEffect, useRef, useState } from 'react';
import './TrackerItem.scss';

export const TrackerItem = (Props) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const increment = useRef(null);

  useEffect(() => {
    increment.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1000);
    }, 1000);
  }, []);

  const handleStart = () => {
    setIsActive(true);
    increment.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1000);
    }, 1000);
  };

  const handlePause = () => {
    setIsActive(false);
    clearInterval(increment.current);
  };

  const format = time => String(time).padStart(2, '0');

  const formatTime = () => {
    const getSeconds = Math.floor(timer / 1000) % 60;
    const getMinutes = Math.floor(timer / 60000) % 60;
    const getHours = Math.floor(timer / 3600000);

    return `${format(getHours)}:${format(getMinutes)}:${format(getSeconds)}`;
  };

  return (
    <div key={Props.id} className="trackerItem">
      <div>{Props.name}</div>
      <div>
        {`${formatTime()}`}
      </div>
      <button
        className="trackerItem__button material-icons"
        onClick={!isActive ? handleStart : handlePause}
        type="button"
      >
        {isActive ? 'pause' : 'play_arrow'}
      </button>
    </div>
  );
};
