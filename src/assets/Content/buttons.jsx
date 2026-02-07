import { useState } from "react";
import "./button.css"

export default function YesNoButtons() {
  const noTexts = [
    "No",
    "You sure?",
    "Think again...",
    "Maybe yes?",
    "Last chance",
    "Please",
    "I won't give up"
  ];

  const [noClicks, setNoClicks] = useState(0);

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1);
  };

  const handleYesClick = () => {
    
  };

  const scaleValue = 1 + noClicks * 1;
  const noText = noTexts[Math.min(noClicks, noTexts.length - 1)];
  const moveNo = noClicks * 25;

  return (
    
    <div className="buttons-wrapper">
  <div className="buttons-inner">
    <button
      onClick={handleNoClick}
      className="no-btn"
      style={{
        transform: `translateX(-${moveNo}px)`,
      }}
    >
      {noText}
    </button>

    <a href="final" className="yes-link">
      <button
        onClick={handleYesClick}
        className="yes-btn"
        style={{
          transform: `scale(${scaleValue})`,
        }}
      >
        Yes
      </button>
    </a>
  </div>
</div>
  );
}