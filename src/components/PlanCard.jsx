import PropTypes from "prop-types";
import "../styles/PlanCard.css";

export default function PlanCard(props) {
	return (
		<div className="plancard-box">
            <h2>
                {props.title}
            </h2>
            <h3>
                {props.subtitle}
            </h3>
			<img
				className="plancard-img"
				src={props.sourceImage}
				alt={props.altImage}
			/>
            <ul>
                
            </ul>
			<p className="plancard-title">{props.title}</p>
			<p className="plancard-text">{props.text}</p>
		</div>
	);
}

PlanCard.propTypes = {
	sourceImage: PropTypes.string.isRequired,
	altImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};
