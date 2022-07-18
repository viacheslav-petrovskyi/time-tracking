import React, { useEffect, useState } from 'react';
import './TrackerList.scss';

export const TrackerList = (Props) => {
  const [stop, setStop] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const formatTime = time => String(time).padStart(2, '0');

  useEffect(() => {
    if (seconds < 60 && !stop) {
      setTimeout(() => setSeconds(seconds + 1), 1000);
    }

    if (seconds === 60) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }

    if (minutes === 60) {
      setMinutes(0);
      setHours(hours + 1);
    }
  }, [seconds, stop]);

  return (
    <div className="trackerItem">
      <div key={Props.id}>{Props.name}</div>
      <div>
        {
          `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
        }

      </div>
      <button
        className="trackerItem__button material-icons"
        onClick={() => setStop(!stop)}
        type="button"
      >
        {stop ? 'play_arrow' : 'pause'}
      </button>
    </div>
  );
};
