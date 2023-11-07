import bikeFrontImg from '/public/static/bike-front.svg'
import bikeRightImg from '/public/static/bike-right.svg'
import bikeLeftImg from '/public/static/bike-left.svg'
import Image from 'next/image'
import styles from '@/styles/BikeSurvey.module.css'

export default function BikeSurvey() {
    return (
        <>
            <main className={styles['bike-survey']}>
                <h1>Envio das fotos:</h1>
                <h4>*Tire a foto semelhante as imagens*</h4>
                <div className={styles['bikes']}>
                    <div className={styles['bike']}>
                        <Image
                            width={300}
                            height={300}
                            src={bikeFrontImg}
                            alt="Bike de frente"
                        />
                        <div className={styles['bike-action']}>
                            <p>Mostre a frente da bike:</p>
                            <button>Tirar foto</button>
                        </div>
                    </div>
                    <div className={styles['bike']}>
                        <Image
                            width={300}
                            height={300}
                            src={bikeRightImg}
                            alt="Bike de lado direito"
                        />
                        <div className={styles['bike-action']}>
                            <p>Mostre o lado direito da bike:</p>
                            <button>Tirar foto</button>
                        </div>
                    </div>
                    <div className={styles['bike']}>
                        <Image
                            width={300}
                            height={300}
                            src={bikeLeftImg}
                            alt="Bike de lado esquerdo"
                        />
                        <div className={styles['bike-action']}>
                            <p>Mostre o lado esquerdo da bike:</p>
                            <button>Tirar foto</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
