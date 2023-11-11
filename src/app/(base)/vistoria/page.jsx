'use client'
import bikeFrontImg from '/public/static/bike-front.svg'
import bikeRightImg from '/public/static/bike-right.svg'
import bikeLeftImg from '/public/static/bike-left.svg'
import Image from 'next/image'
import styles from '@/styles/BikeSurvey.module.css'
import { useState } from 'react'

export default function BikeSurvey() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const onSubmit = async e => {
        e.preventDefault()
        if (loading) return
        // Get data from form
        const form = new FormData(e.target)
        form.append('image', e.target.bikeRight.files[0])
        try {
            const res = fetch('http://localhost:8000/predict', {
                method: 'POST',
                body: form,
            })
            setLoading(true)
            const data = await (await res).json()
            setLoading(false)
            setResult(data.prediction)
        } catch (err) {
            console.log(
                'Erro na vistoria, provavelmente o servidor não está rodando'
            )
            console.log(
                'Acesse: https://github.com/Nexio-Corp/flask-ai-porto e siga as instruções'
            )
            setLoading(false)
            setResult('erro')
        }
    }
    return (
        <>
            <main className={styles['bike-survey']}>
                <h1>Envio das fotos:</h1>
                <h4>
                    {!loading
                        ? '*Tire a foto semelhante as imagens*'
                        : 'Processando imagens...'}
                </h4>
                <form className={styles['bikes']} onSubmit={onSubmit}>
                    {/* <div className={styles['bike']}>
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
                    </div> */}
                    <div className={styles['bike']}>
                        <Image
                            width={300}
                            height={300}
                            src={bikeRightImg}
                            alt="Bike de lado direito"
                        />
                        <div className={styles['bike-action']}>
                            <p>Mostre o lado direito da bike:</p>
                            <input
                                type="file"
                                required
                                name="bikeRight"
                                id="bikeRight"
                            />
                        </div>
                    </div>
                    {/* <div className={styles['bike']}>
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
                    </div> */}
                    {result === null ? (
                        <button type="submit">Enviar</button>
                    ) : result === 'quebrada' ? (
                        <h1>A sua bike foi reprovada na vistoria!</h1>
                    ) : result === 'erro' ? (
                        <h1>Erro na vistoria, por favor tente mais tarde!</h1>
                    ) : (
                        <h1>A sua bike foi aprovada na vistoria!</h1>
                    )}
                </form>
            </main>
        </>
    )
}
