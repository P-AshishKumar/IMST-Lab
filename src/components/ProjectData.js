import "../components/CardStyles.css";

function CardData(props) {
  return (
    <div className="t-card">
      <div className="t-image>">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p className="project-para">{props.text}</p>
    </div>
  );
}

export default CardData;
