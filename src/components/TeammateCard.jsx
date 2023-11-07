import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '@/styles/TeammateCard.module.css'
export default function TeammateCard(props) {
    return (
        <div className={styles['teammate-card']}>
            <Image
                width={300}
                height={300}
                src={props.sourceImage}
                alt={props.altImage}
            />
            <p>{props.nome}</p>
            <p>{props.rm}</p>
            <div className={styles['logo-box']}>
                <a href={props.github} target="_blank" rel="noreferrer">
                    <Image
                        width={300}
                        height={300}
                        src="/static/github-logo.svg"
                        alt="logo github"
                    />
                </a>
                <a href={props.linkedin} target="_blank" rel="noreferrer">
                    <Image
                        width={300}
                        height={300}
                        src="/static/linkedin-logo.svg"
                        alt="logo linkedin"
                    />
                </a>
            </div>
        </div>
    )
}

TeammateCard.propTypes = {
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    sourceImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    rm: PropTypes.string.isRequired,
}
