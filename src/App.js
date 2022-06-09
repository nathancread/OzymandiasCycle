import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import "react-awesome-slider/dist/styles.css";
//import "./fixSlider.css"
import * as sliderSettings from "./sliderSettings.js"
import "./App.css"
export default function App() {
  const data = [
    {
      id: "1",
      icon: "asset/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://i.imgur.com/Km4RKjj.jpg"
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

  const bgImg = {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%"
  };

  return (
    // <div className="App">
    //   <AwesomeSlider cssModule={AwesomeSliderStyles}>
    //     {data.map((d) => (
    //       <div className="item">
    //         <div className="left">
    //           <div className="leftContainer">
    //             <div className="Background-component">
    //               <img src={d.img} />
    //             </div>
    //             <h2>{d.title}</h2>
    //             <p>{d.desc} </p>
    //           </div>
    //         </div>


    //       </div>
    //     ))}
    //   </AwesomeSlider>
    // </div>

    <AwesomeSlider style={sliderSettings.sliderSettings}
      fillParent={true}>
      {data.map((d) => (
        // <div className="item">
        //   <div className="left">
        //     <div className="leftContainer">
        <div style={{ zIndex: 2 }}>
          <div className='page'>
            <img style={bgImg} src={d.img} />
          </div>
          <div className="Byron">
                <h1 className="Byron-title">BYRON</h1>
                <p>The freezing wind bites at your face as you survey the barren tundra in front of you. Stinking corpses piled dozens high, charred beyond recognition to prevent their reawakening.  </p>
          </div>

        </div>
        //       <h2>{d.title}</h2>
        //       <p>{d.desc} </p>
        //     </div>
        //   </div>
        //  </div>
      ))}
    </AwesomeSlider>
    //   media={
    //     [{ "source": "https://i.imgur.com/JNGZyXf.jpg" },
    //     { "source": "https://i.imgur.com/OTaXMbg.jpg" },
    //     { "source": "https://i.imgur.com/w9saCm7.jpg" }]
    // }
  );
}
