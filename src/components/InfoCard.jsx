import PropTypes from 'prop-types'
import '../styles/FAQCard.css'

export default function FAQCard(props) {
    return (
        <div className="faqcard-box">
            <p className="infocard-title">{props.title}</p>
            <p className="infocard-text">{props.text}</p>
        </div>
    )
}

FAQCard.propTypes = {
    sourceImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
