import PropTypes from 'prop-types'
import '../styles/PlanCard.css'

export default function PlanCard(props) {
    return (
        <div className="plancard-box">
            <img
                className="plancard-img"
                src={props.sourceImage}
                alt={props.altImage}
            />
            <p className="plancard-title">{props.title}</p>
            <p className="plancard-subtitle">{props.subtitle}</p>
            <p className="plancard-text">{props.text}</p>
        </div>
    )
}

PlanCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    sourceImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
