import React, { useState } from 'react';
import { TrackerItem } from '../TrackerItem';
import './Tracker.scss';

export const Tracker = () => {
  const [nameTracker, setNameTracker] = useState('');
  const [trackerList, setTrackerList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTracker = {
      id: Date.now(),
      name: !nameTracker.trim()
        ? `${new Date().toDateString()}`
        : nameTracker,
    };

    setTrackerList([...trackerList, newTracker]);
    setNameTracker('');
  };

  return (
    <div className="tracker">
      <p className="tracker__title">tracker</p>
      <form className="tracker__form" onSubmit={handleSubmit}>
        <input
          value={nameTracker}
          onChange={event => setNameTracker(event.target.value)}
          className="tracker__input"
          type="text"
          placeholder="Enter tracker name"
        />
        <button
          className="tracker__button material-icons"
          type="submit"
        >
          play_arrow
        </button>
      </form>
      {trackerList.map(tracker => (
        <div key={tracker.id}>
          <TrackerItem
            id={tracker.id}
            name={tracker.name}
          />
        </div>
      ))}
    </div>
  );
};
