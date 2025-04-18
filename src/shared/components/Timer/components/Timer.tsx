import React from 'react';
import './timer.css';

interface TimerViewProps {
  duration: number;
  isTimeUp?: boolean;
  handleTimer?: () => void;
  handleStop?: () => void;
}

const TimerView: React.FC<TimerViewProps> = ({ duration }) => {
  let minutes: string | number = parseInt(String(duration / 60), 10);
  let seconds: string | number = parseInt(String(duration % 60), 10);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const value = `${minutes}:${seconds}`;

  return (
    <div className="ui-timer">
      <span>Time Left:</span> <span>&nbsp;</span>{value}
    </div>
  );
};

export default TimerView;
