import PropTypes from 'prop-types'
import '../styles/FAQCard.css'

export default function InfoCard(props) {
    return (
        <div className="faqcard-box">

            <p className="faqcard-title">{props.title}</p>
            <p className="faqcard-text">{props.text}</p>
            {props.list}
        </div>
    )
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired
}
