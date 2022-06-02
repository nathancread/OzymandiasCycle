import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function App() {
  const data = [
    {
      id: "1",
      icon: "asset/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://i.imgur.com/JNGZyXf.jpg"
    },
    {
      id: "2",
      icon: "asset/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.imgur.com/OTaXMbg.jpg"
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
  return (
    <div className="App">
      <AwesomeSlider>
        {data.map((d) => (
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.img} />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc} </p>
              </div>
            </div>

            
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
}
