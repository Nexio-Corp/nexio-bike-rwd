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
                    <ul>{props.list}</ul>
                </div>
                <p className="faqcard-subtext">{props.subtext}</p>  
                <div className="faqcard-list">
                    <ul>{props.list2}</ul>
                </div>
            </div>
        </div>
    )
}

FAQCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
