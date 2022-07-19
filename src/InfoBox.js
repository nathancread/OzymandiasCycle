import "./Byron.css"

function InfoBox({ info }) {
    //const [showBack, setShowBack] = useState(false);
return (
    <div className="Byron-info-box">
    <div className={info.titleStyle}>{info.title}</div>
    <div className="Byron-map-box">
    <img className="photo" src={info.map} ></img>
    </div>
    </div>
  );
}

export default InfoBox;