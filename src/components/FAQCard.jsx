'use client'
import PropTypes from 'prop-types'

export default function FAQCard(props) {
    return (
        <div className="faqcard-container">
            <div className="faqcard-title-box">
                <p className="faqcard-title">{props.title}</p>
                <p className="faqplus" onClick={MoreInfo}>
                    +
                </p>
            </div>
            <div className="faqcard-text-box hidden">
                <p className="faqcard-text">{props.text}</p>
                <div className="faqcard-list">
                    <ul>
                        {Array.isArray(props.list) &&
                            props.list.length > 0 &&
                            props.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                    </ul>
                </div>
                <p className="faqcard-subtext">{props.subtext}</p>
            </div>
        </div>
    )
}

function MoreInfo() {
    let container = document.querySelector('.faqcard-text-box')
    let isHidden = container.classList.contains('hidden')

    if (isHidden) {
        container.classList.remove('hidden')
    } else {
        container.classList.add('hidden')
    }
}

FAQCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
