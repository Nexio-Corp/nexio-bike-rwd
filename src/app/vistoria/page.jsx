import bikeFrontImg from '/public/static/bike-front.svg'
import bikeRightImg from '/public/static/bike-right.svg'
import bikeLeftImg from '/public/static/bike-left.svg'
import Image from 'next/image'

export default function BikeSurvey() {
    return (
        <>
            <main className="bike-survey">
                <h1>Envio das fotos:</h1>
                <h4>*Tire a foto semelhante as imagens*</h4>
                <div className="bikes">
                    <div className="bike">
                        <Image
                            width={300}
                            height={300}
                            src={bikeFrontImg}
                            alt="Bike de frente"
                        />
                        <div className="bike-action">
                            <p>Mostre a frente da bike:</p>
                            <button>Tirar foto</button>
                        </div>
                    </div>
                    <div className="bike">
                        <Image
                            width={300}
                            height={300}
                            src={bikeRightImg}
                            alt="Bike de lado direito"
                        />
                        <div className="bike-action">
                            <p>Mostre o lado direito da bike:</p>
                            <button>Tirar foto</button>
                        </div>
                    </div>
                    <div className="bike">
                        <Image
                            width={300}
                            height={300}
                            src={bikeLeftImg}
                            alt="Bike de lado esquerdo"
                        />
                        <div className="bike-action">
                            <p>Mostre o lado esquerdo da bike:</p>
                            <button>Tirar foto</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
