import { Link } from "react-router-dom";
import "./DynamicLink.css";

const DynamicLink = (props) => {
  return (
    <a
      href={props.DynamicLink}
      className="ProjectLabel"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="DynamicWrapper">
        <div className="DynamicTextContainer">
          <h1 className="DynamicTitle">{props.DynamicTitle}</h1>
          <h2 className="DynamicText">{props.DynamicText}</h2>
        </div>
        <img className="DynamicImg" src={props.DynamicImg} alt="" />
      </div>
    </a>
  );
};

export default DynamicLink;
