import "./ClientCard.css";

const ClientCard = (props) => {
  return (
    <div className="ClientCard">
      <div className="CardTextContainer">
        <h2 className="CardText">{props.CardText}</h2>
        <h1 className="CardName">{props.CardName}</h1>
      </div>
      <img className="ClientSignature" src={props.ClientSignature} alt="" />
    </div>
  );
};

export default ClientCard;
