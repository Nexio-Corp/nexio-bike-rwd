import PropTypes from 'prop-types'
import '../styles/FAQCard.css'

export default function FAQCard(props) {
    return (
        <div className="faqcard-container">
            <div className="faqcard-title-box">
                <p className="faqcard-title">{props.title}</p>
                <p className="faqplus">+</p>
            </div>
            <div className="faqcard-text-box">
                <p className="faqcard-text">{props.text}</p>
                <div className="faqcard-list">
                    {props.list}
                </div>
                <p className="faqcard-subtext">{props.subtext}</p>
            </div>
        </div>
    )
}

FAQCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    subtext: PropTypes.string.isRequired
}
