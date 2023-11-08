'use client'
import PropTypes from 'prop-types'
import styles from '@/styles/FAQCard.module.css'
import { useRef } from 'react'
export default function FAQCard(props) {
    const faqcard = useRef(null)
    return (
        <div className={styles['faqcard-container']}>
            <div className={styles['faqcard-title-box']}>
                <p className={styles['faqcard-title']}>{props.title}</p>
                <p
                    className={styles['faqplus']}
                    onClick={e => MoreInfo(faqcard.current)}
                >
                    +
                </p>
            </div>
            <div
                className={styles['faqcard-text-box'] + ' ' + styles['hidden']}
                ref={faqcard}
            >
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

function MoreInfo(container) {
    console.log(container)
    let isHidden = container.classList.contains(styles['hidden'])

    if (isHidden) {
        container.classList.remove(styles['hidden'])
    } else {
        container.classList.add(styles['hidden'])
    }
}

FAQCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
