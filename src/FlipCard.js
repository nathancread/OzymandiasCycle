import { useState } from "react";
import cn from "classnames";
import "./Byron.css"

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  function handleFocus() { 
    if (card.variant === "focus") { 
      setShowBack(true); 
    } 
  } 

  function handleBlur() { 
    if (card.variant === "focus") { 
      setShowBack(false); 
    } 
  } 

  return (
    <div
      tabIndex={card.id} 
      className={cn("flip-card-outer", { 
        "focus-trigger": card.variant === "focus" 
      })} 
      onClick={handleClick}
      onFocus={handleFocus} 
      onBlur={handleBlur} 
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front" >
          <div className={card.frontStyle}>
            <div className={card.titleStyle}>{card.title}</div>
            <div className={card.subtitleStyle}>{card.subtitle}</div>
            <img className="photo" src={card.imageLink} ></img>
            <div className={card.descriptionTitleStyle}>{card.descriptionTitle}</div>

          </div>

        </div>
        <div className="card back">
          <div>
            <p className="card-text fs-1 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;