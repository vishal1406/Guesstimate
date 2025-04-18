import React from "react";
import { Button } from "@shared";
import "../styles/gameRules.css";
import { X } from "lucide-react";

interface GameRulesProps {
  onCloseClick: () => void;
}

const GameRules: React.FC<GameRulesProps> = ({ onCloseClick }) => {
  const letters = ["w", "o", "r", "l", "d"];
  const status = ["absent", "absent", "exact", "absent", "present"];

  return (
    <>
      <div className="ui-rules">
        <X className="ui-close-icon" size={28} onClick={onCloseClick} />
        <h1 className="ui-rules__heading">How to play</h1>
        <div className="ui-rules__subHeading">
          You get 6 tries to guess a target word.
          <br />
          Find it before time runs out to win the round.
        </div>
        <div className="ui-rules__example">
          <div className="ui-rules__example__items">
            {letters.map((item, index) => (
              <Button
                key={index}
                overlay={true}
                status={status[index]}
                label={item.toUpperCase()}
              />
            ))}
          </div>
        </div>
        <div className="ui-rules__description">
          <span className="ui-rules__description__absent">W</span>,{" "}
          <span className="ui-rules__description__absent">O</span> and{" "}
          <span className="ui-rules__description__absent">L</span> aren't in the
          target word at all.
          <br />
          The third letter{" "}
          <span className="ui-rules__description__exact">R</span> is correct!
          <br />
          <span className="ui-rules__description__present">D</span> occurs
          elsewhere in the target word.
          <br />
          <b>A new GUESSTIMATE will be available each day.</b>
        </div>
      </div>
    </>
  );
};

export default GameRules;
