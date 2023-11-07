import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '@/styles/PlanCard.module.css'
export default function PlanCard(props) {
    return (
        <div className={styles['plancard-container']}>
            <div className={styles['plancard-information-container']}>
                <h2 className={styles['plancard-title']}>{props.title}</h2>
                <h3 className={styles['plancard-subtitle']}>
                    {props.subtitle}
                </h3>
                <Image
                    width={300}
                    height={300}
                    className={styles['plancard-img']}
                    src={props.sourceImage}
                    alt={props.altImage}
                />
                <ul className={styles['plancard-list']}>
                    {props.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className={styles['plancard-notes-container']}>
                    {props.notes &&
                        props.notes.map((item, index) => (
                            <p className={styles['plancard-note']} key={index}>
                                {item}
                            </p>
                        ))}
                </div>
            </div>
            <div className={styles['plancard-get-container']}>
                <p className={styles['plancard-get']}>Contratar agora</p>
            </div>
        </div>
    )
}

PlanCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    sourceImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    notes: PropTypes.array,
}
