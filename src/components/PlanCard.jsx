import PropTypes from 'prop-types'
import Image from 'next/image'

export default function PlanCard(props) {
    return (
        <div className="plancard-container">
            <div className="plancard-information-container">
                <h2 className="plancard-title">{props.title}</h2>
                <h3 className="plancard-subtitle">{props.subtitle}</h3>
                <Image
                    width={300}
                    height={300}
                    className="plancard-img"
                    src={props.sourceImage}
                    alt={props.altImage}
                />
                <ul className="plancard-list">
                    {props.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="plancard-notes-container">
                    {props.notes &&
                        props.notes.map((item, index) => (
                            <p className="plancard-note" key={index}>
                                {item}
                            </p>
                        ))}
                </div>
            </div>
            <div className="plancard-get-container">
                <p className="plancard-get">Contratar agora</p>
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
