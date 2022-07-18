import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactCardFlip from 'react-card-flip';
import FlipCard from "./FlipCard";

import * as sliderSettings from "./sliderSettings.js"
import "./App.scss"
import "./Byron.css"

export default function App() {
  const playerRaces = [
    {
      id: "1",
      frontStyle: "Byron-front-1",

      titleStyle: "Byron-title-1",
      title: "CHILLMARROW",

      subtitleStyle: "Byron-subtitle-1",
      subtitle: "Stoic and honorable, the chillmarrow are as uncompormising as the ice they call home. ",

      imageStyle: "Byron-image-style",
      imageLink: "https://i.imgur.com/8hpqSLm.png",
      
      descriptionTitleStyle: "Byron-description-title-1",
      descriptionTitle:"Byron-description-title-1",

      variant: "hover",
      front: "Hover",
      back: "Back"
    },
    {
      id: "2",
      frontStyle: "Byron-front-1",
      variant: "hover",
      front: "Hover",
      back: "Back"
    }

  ];
  const data = [
    {
      id: "1",
      icon: "asset/mobile.png",
      title: "Byron",
      desc:
        "The freezing wind bites at your face as you survey the barren tundra. Stinking corpses piled dozens high, charred beyond recognition to prevent their reawakening. ",
      img:
        "https://i.imgur.com/w6qSGWC.jpg"
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

  const backgrounds = [
    <img id="1" className="Slider-style" src="https://i.imgur.com/7roU439.png" onDragStart={handleDragStart} role="presentation" />,
    <img id="2" className="Slider-style" src="https://imgur.com/YRJLDPN.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img id="3" className="Slider-style" src="https://i.imgur.com/w9saCm7.jpg" onDragStart={handleDragStart} role="presentation" />,
  ]
  const bgImg = {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%"

  };

  return (


    <AwesomeSlider className="App" style={sliderSettings.sliderSettings} fillParent={true}>
      {data.map((d) => (
        // <div style={{ zIndex: 2 }} >
        //   <div className="Slider-frame">
        //     <AliceCarousel mouseTracking  backgrounds={backgrounds} disableButtonsControls={false} infinite={true}   />
        //   </div>
        //   <div className="Slider-frame-2">
        //     <AliceCarousel  mouseTracking backgrounds={backgrounds} disableButtonsControls={false} infinite={true}   />
        //   </div>
        //   <div className="Byron">
        //     <div className="Byron-title-container">
        //       <div className="Byron-title">{d.title}</div>
        //     </div>
        //     <div className="Byron-description-container">
        //       <div className="Byron-description">{d.desc}</div>
        //     </div>
        //   </div>

        <div className="App" >
          <div key={d.key} className='page'>
            <img style={bgImg} src={d.img} />
            <div className="Page-left">
              {playerRaces.map((card) => (
                <FlipCard key={card.id} card={card} />
              ))}
            </div>
            <div className="Page-center"></div>
            <div className="Page-right"></div>
          </div>
        </div>


      ))}
    </AwesomeSlider>


  );
}
