import PropTypes from "prop-types";
import "../assets/styles/card.css";

function Card(props) {
  // console.log(props.category);
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h2>{props.price}</h2>
      <button>
        {props.category[0]}&nbsp;
        {props.category[1]}
      </button>
    </div>
  );
}

export default Card;
