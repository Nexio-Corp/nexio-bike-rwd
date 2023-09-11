import PropTypes from "prop-types";

export default function InfoCard(props) {
	return (
		<div className="box-infocard">
			<img src={props.sourceImage} alt={props.altImage} />
			<p>{props.title}</p>
			<p>{props.text}</p>
		</div>
	);
}

InfoCard.propTypes = {
	sourceImage: PropTypes.string.isRequired,
	altImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
