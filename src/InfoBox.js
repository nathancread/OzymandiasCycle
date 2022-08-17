import { useState } from "react";
import cn from "classnames";
import "./Byron.css"

function InfoBox({ info }) {
    //const [showBack, setShowBack] = useState(false);
return (
    <div className="Byron-info-box">
    <div className={info.titleStyle}>{info.title}</div>
    <div className={info.subtitleStyle}>{info.desc} </div>
    
    <div className="Byron-map-box">
    {/* <img alt="" className="photo" src={info.map} ></img> */}
    <div className={info.descriptionTitleStyle}>{info.descriptionTitle1}</div>
    <div className={info.descriptionStyle}>{info.description1}</div>
    <div className={info.descriptionTitleStyle}>{info.descriptionTitle2}</div>
    <div className={info.descriptionStyle}>{info.description2}</div>
    <div className={info.descriptionTitleStyle}>{info.descriptionTitle3}</div>
    <div className={info.descriptionStyle}>{info.description3}</div>
    <div className={info.descriptionTitleStyle}>{info.descriptionTitle4}</div>
    <ul>
              <li className={info.bulletStyle}><b>{info.abilityTitle1}</b>{info.ability1}</li>
              <li className={info.bulletStyle}><b>{info.abilityTitle2}</b>{info.ability2}</li>
              <li className={info.bulletStyle}><b>{info.drawbackTitle1}</b>{info.drawback1}</li>
        </ul>


    </div>
    </div>
  );
}

export default InfoBox;