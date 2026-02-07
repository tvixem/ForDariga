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
    
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width:"50%",
      }}
    >
      <div style={{ display: "flex",justifyContent:"space-between",width:"100%" }}>
        <button
          onClick={handleNoClick}
          style={{
            width:"200px",
            height:"100px",
            fontSize: "2rem",
            borderRadius: "20px",
            border: "1px solid white",
            transform: `translateX(-${moveNo}px)`,
            cursor: "pointer",
          }}
        >
          {noText}
        </button>

        <a href="final" style={{
            color:"white"
        }}><button
          onClick={handleYesClick}
          style={{
            width:"200px",
            height:"100px",
            fontSize: "2rem",
            borderRadius: "20px",
            border: "1px solid white",
            cursor: "pointer",
            transform: `scale(${scaleValue})`,
            color:"white",
            marginLeft:"20px",
            gap:"20px"
          }}
        >
          Yes
        </button></a>
      </div>
    </div>
  );
}