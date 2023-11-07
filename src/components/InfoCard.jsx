import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '@/styles/InfoCard.module.css'
export default function InfoCard(props) {
    return (
        <div className={styles['infocard-box']}>
            <Image
                width={300}
                height={300}
                className={styles['infocard-img']}
                src={props.sourceImage}
                alt={props.altImage}
            />
            <p className={styles['infocard-title']}>{props.title}</p>
            <p className={styles['infocard-text']}>{props.text}</p>
        </div>
    )
}

InfoCard.propTypes = {
    sourceImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
