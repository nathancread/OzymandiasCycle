


import { useState } from "react";
import cn from "classnames";
import "./Byron.css"
import "./border.scss"

function GenericCard({ card }) {
    //const [showBack, setShowBack] = useState(false);
    return (
        // <div className="card front" >
            <div className={card.backgroundStyle}>
                <div className={card.frontStyle}>
                    <div className={card.titleStyle}>{card.title}</div>
                    {/* <div className={card.subtitleStyle}>{card.subtitle}</div> */}
                    <div className="border-container">
                        <div class={card.strStyle}><div class="shape-inner octagon"><div class="Byron-ability-scores">STR</div></div></div>
                        <div class={card.dexStyle}><div class="shape-inner octagon"><div class="Byron-ability-scores">DEX</div></div></div>
                        <div class={card.conStyle}><div class="shape-inner octagon"><div class="Byron-ability-scores">CON</div></div></div>
                        <div class={card.intStyle}><div class="shape-inner octagon"><div class="Byron-ability-scores">INT</div></div></div>
                        <div class={card.wisStyle}><div class="shape-inner octagon"><div class="Byron-ability-scores">WIS</div></div></div>
                        <div class={card.chaStyle}><div class="shape-inner octagon"><div class="Byron-ability-scores">CHA</div></div></div>
                    </div>
                    <img alt="card" className="photo" src={card.imageLink} ></img>
                    <div className={card.descriptionTitleStyle}>{card.descriptionTitle1}</div>
                    <div className="icon-container">                    
                        <img alt="card" className="Byron-icon" src="https://i.imgur.com/oTcgXuW.png" ></img>
                        <div className="Byron-icon-title">Aquatic Adaptations</div>
                    </div>
                    <div className="icon-container">                    
                        <img alt="card" className="Byron-icon" src="https://i.imgur.com/h5UJwdD.png" ></img>
                        <div className="Byron-icon-title">Marsh Walker</div>
                    </div>
                    <div className={card.descriptionTitleStyle}>{card.descriptionTitle2}</div>

                    <div className="icon-container">                    
                        <img alt="card" className="Byron-icon" src="https://i.imgur.com/fC0cfDR.png" ></img>
                        <div className="Byron-icon-title">Cold Feet</div>
                    </div>
                    {/* <div className={card.descriptionStyle}>{card.description1}</div>
                    <div className={card.descriptionTitleStyle}>{card.descriptionTitle2}</div>
                    <div className={card.descriptionStyle}>{card.description2}</div> */}

                </div>
            </div>
        // </div>
    );
}

export default GenericCard;