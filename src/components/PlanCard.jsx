import PropTypes from "prop-types";
import "../styles/PlanCard.css";

export default function PlanCard(props) {
	return (
		<div className="plancard-box">
			<h2 className="plancard-title">{props.title}</h2>
			<h3 className="plancard-subtitle">{props.subtitle}</h3>
			<img
				className="plancard-img"
				src={props.sourceImage}
				alt={props.altImage}
			/>
			<ul className="plancard-list">
				{props.list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			{props.notes &&
				props.notes.map((item, index) => <p className="plancard-note" key={index}>{item}</p>)}
			<button className="plancard-button">Contratar agora</button>
			{/* <p>Contratar agora</p> */}
		</div>
	);
}

PlanCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	sourceImage: PropTypes.string.isRequired,
	altImage: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,
	notes: PropTypes.array,
};
