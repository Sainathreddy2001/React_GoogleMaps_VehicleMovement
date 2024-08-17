
import React, { useState } from 'react';
import playIcon from '../assets/play.png'; 
import stopIcon from '../assets/pause.png'; 
import replayIcon from '../assets/replay.png';

import './ControlPanel.css';

const ControlPanel = ({ onPlay, onStop, onReplay, onOptionChange, showControlPanel, toggleControlPanel, progress }) => {
  const [selectedOption, setSelectedOption] = useState('Today');

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onOptionChange(value);
  };

  return (
    <div className="control-panel">
      <button onClick={toggleControlPanel} className="open-button">☰</button>
      {showControlPanel && (
        <div className="control-content">
          <button onClick={onPlay} className="control-button">
          <img src={playIcon} alt="Play" className="control-icon" />
          </button>

          <button onClick={onStop} className="control-button">
          <img src={stopIcon} alt="Stop" className="control-icon" />
          </button>
          <button onClick={onReplay} className="control-button">
          <img src={replayIcon} alt="Replay" className="control-icon" />
          </button>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="speed-progress" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <select value={selectedOption} onChange={handleOptionChange} className="dropdown">
            <option value="Today">Today's</option>
            <option value="Yesterday">Yesterday's</option>
            <option value="Before Yesterday">Before Yesterday's</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;