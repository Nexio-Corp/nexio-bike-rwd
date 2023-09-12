import PropTypes from 'prop-types'
import '../styles/FAQCard.css'

export default function FAQCard(props) {
    return (
        <div className="faqcard-box">
            <div className="faqcard-title-box">
                <p className="faqcard-title">{props.title}</p>
            </div>
            <div className="faqcard-text-box">
                <p className="faqcard-text">{props.text}</p>
                {props.list}
                <p className="faqcard-subtext">{props.subtext}</p>
            </div>
        </div>
    )
}

FAQCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired
}
