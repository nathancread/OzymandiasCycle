
import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Byron.css";
import "./PlanetSelect.css";


const Ozymandias = () => {

    const [state, setState] = useState({
        isPaneOpenLeft: false,
    });

  return (

    <div>
    <div className= "bg-img" style={{backgroundImage: `url("https://i.imgur.com/1asW18F.jpg")`}} >
        <button className="Byron-button" onClick={() => setState({ isPaneOpenLeft: true })}></button>
      <SlidingPane
        isOpen={state.isPaneOpenLeft}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="30%"
        hideHeader="true"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div className="Select-title-1">Byron</div>
        <div className="Select-subtitle-1">Land of the midnight sun</div>
        <div className="Select-header-line"></div>
        <div className="Select-header-title">World</div>
        <div className="Select-header-subtitle">This cold and brutal world is infested with undead, dangerous cults and brutally strict caste system.</div>
        <a href="/OzymandiasCycle/Byron" className="Select-button"  >More Info</a>

        <div className="Select-header-line"></div>
        <div className="Select-header-title">Races</div>
        <div className="Select-header-subtitle">The harsh enviornment of Byron has led to unique and powerful biological adaptations. </div>
        <a href="/OzymandiasCycle/Byron" className="Select-button"  >More Info</a>

        <div className="Select-header-line"></div>
        <div className="Select-header-title">Factions</div>
        <div className="Select-header-subtitle">The evil nacent evil surging though Byron inspires excellence from some and brings out the monsters in others. </div>
        <a href="/OzymandiasCycle/Byron" className="Select-button"  >More Info</a>


      </SlidingPane>
      </div>
    </div>
  );
};
  
export default Ozymandias;