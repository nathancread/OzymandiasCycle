import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import FlipCard from "./FlipCard";
import * as sliderSettings from "./sliderSettings.js"
import InfoBox from "./InfoBox";
import GenericCard from "./GenericCard";

const Byron = () => {
  const playerRaces = [
    {
      id: "1",
      frontStyle: "Byron-front-1",

      backgroundStyle: "Byron-bg",
      titleStyle: "Byron-title-1",
      title: "CHILLMARROW",

      strStyle: "shape-outer-green octagon",
      dexStyle: "shape-outer-green octagon",
      conStyle: "shape-outer-green octagon",
      intStyle: "shape-outer-red octagon",
      wisStyle: "shape-outer-green octagon",
      chaStyle: "shape-outer-red octagon",



      subtitleStyle: "Byron-subtitle-1",
      subtitle: "Honorable and stoic, the Chillmarrow are as uncompormising as the ice they call home. ",

      imageStyle: "Byron-image-style",
      imageLink: "https://i.imgur.com/8hpqSLm.png",

      descriptionTitleStyle: "Byron-description-title-1",
      descriptionTitle1: "Traits",
      // descriptionTitle1: "Meltwater Swamp",

      descriptionStyle: "Byron-description-1",
      description1: " The unique physiology of the Chillmarrow allow them to live deep inside the frozen Meltwater Swamp. Millennia of evolution have prepared the Chillmarrow to swim breath and create cities beneath the slushy ice of the swamp.  ",

      descriptionTitle2: "Drawbacks",
      // descriptionTitle2: "Stength and Honor",
      description2: "The feircely individualist Chillmarrow value nothing as highly as their honor. Their intense focus on honor gives them a reputation as strict stoic, uncompromising yet very dependable. Chillmarrow are often found as gaurds, tutors, sailors or mercenaries.",

      variant: "hover",
      front: "Hover",
      back: "Back"
    },


  ];
  const data = [
    {
      id: "1",
      icon: "asset/mobile.png",
      title: "BYRON",
      titleStyle: "Byron-main-title",
      subtitleStyle: "Byron-subtitle-1",

      descriptionTitleStyle: "Byron-description-title-1",
      descriptionTitle2: "The Pleasure Dome",
      descriptionTitle1: "Harsh Society",

      descriptionStyle: "Byron-description-1",
      description2: " TThe feircely individualist Chillmarrow value nothing as highly as their honor. Their intense focus on honor gives them a reputation as strict stoic, uncompromising yet very dependable.   ",
      description1: "Millennia of evolution have prepared the Chillmarrow to swim breath and create cities beneath the slushy ice of the swamp.  ",


      desc:
        "The freezing wind bites at your face as you survey the barren tundra. Stinking corpses piled dozens high, charred beyond recognition to prevent their reawakening.",
      img:
        "https://i.imgur.com/2Z14LnV.png",
      map:
        "https://i.imgur.com/jx5UKlV.png"
    },
    {
      id: "2",
      icon: "asset/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.imgur.com/YRzTLw8.jpg"
    },
    {
      id: "3",
      icon: "asset/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.imgur.com/w9saCm7.jpg"
    }
  ];
  const handleDragStart = (e) => e.preventDefault();

  // const bgImg = {
  //   position: "absolute",
  //   zIndex: -1,
  //   left: 0,
  //   top: 0,
  //   width: "100%"

  // };

  return (



    <AwesomeSlider className="App" style={sliderSettings.sliderSettings} fillParent={true}>
      {data.map((d) => (
        <div className="App" >
          <div className= "bg-img" ></div>
            <div className="Page-left">
              {playerRaces.map((card) => (
                <GenericCard key={card.id} card={card} />
              ))}
            </div>
            <div className="Page-center">
              <InfoBox key={d.id} info={d} />
            </div>
            <div className="Page-right">

            </div>
          </div>

      ))}
    </AwesomeSlider>

  );
};

export default Byron;



    // <div className="App" >
    //   <AwesomeSlider className="App" style={sliderSettings.sliderSettings} fillParent={true}>
    //     {data.map((d) => (     
    //       <div> 
    //      <div className= "bg-img" style={{backgroundImage: `url("https://i.imgur.com/2Z14LnV.png")`}} ></div>


          
    //       <div className="Page-left">
    //         {/* {playerRaces.map((card) => (
    //           <FlipCard key={card.id} card={card} />
    //         ))} */}
    //       </div>
    //       <div className="Page-center">
    //       <InfoBox key={data.id} info={data} />

    //       {/* {playerRaces.map((card) => (
    //           <FlipCard key={card.id} card={card} />
    //         ))} */}
    //       </div>
    //       <div className="Page-right">
    //       {/* {playerRaces.map((card) => (
    //           <FlipCard key={card.id} card={card} />
    //         ))} */}
    //       </div>
    //     </div>  
    //             ))}
    //   </AwesomeSlider>
    // </div>