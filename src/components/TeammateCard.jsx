import PropTypes from "prop-types";
import "../styles/TeammateCard.css";

export default function TeammateCard(props) {
  return (
    <div className="teammate-card">
      <img src={props.sourceImage} alt={props.altImage} />
      <p>{props.nome}</p>
      <p>{props.rm}</p>
      <div className="logo-box">
        <img src="/static/github-logo.svg" alt="logo github" />
        <img src="/static/linkedin-logo.svg" alt="logo linkedin" />
      </div>
    </div>
  );
}

TeammateCard.propTypes = {
  sourceImage: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  rm: PropTypes.string.isRequired,
};
