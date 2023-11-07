import PropTypes from 'prop-types'
import Image from 'next/image'

export default function InfoCard(props) {
    return (
        <div className="infocard-box">
            <Image
                width={300}
                height={300}
                className="infocard-img"
                src={props.sourceImage}
                alt={props.altImage}
            />
            <p className="infocard-title">{props.title}</p>
            <p className="infocard-text">{props.text}</p>
        </div>
    )
}

InfoCard.propTypes = {
    sourceImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
