'use client'
import PropTypes from 'prop-types'
import styles from '@/styles/FAQCard.module.css'
export default function FAQCard(props) {
    return (
        <div className={styles['faqcard-container']}>
            <div className={styles['faqcard-title-box']}>
                <p className={styles['faqcard-title']}>{props.title}</p>
                <p className={styles['faqplus']} onClick={MoreInfo}>
                    +
                </p>
            </div>
            <div className={styles['faqcard-text-box hidden']}>
                <p className={styles['faqcard-text']}>{props.text}</p>
                <div className={styles['faqcard-list']}>
                    <ul>
                        {Array.isArray(props.list) &&
                            props.list.length > 0 &&
                            props.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                    </ul>
                </div>
                <p className={styles['faqcard-subtext']}>{props.subtext}</p>
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
