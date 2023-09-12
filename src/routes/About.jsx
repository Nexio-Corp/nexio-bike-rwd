import perfilAdrian from '/static/adrian.png'
import perfilCaua from '/static/adrian.png'

import '../styles/About.css'
export default function About() {
    return (
        <>
            <main className='equipe'>
                <div className='titulo'>
                    <h1>Conheça nossa equipe</h1>
                    <p>Uma equipe altamente eficiente, dedicada <br/>exclusivamente a buscar o melhor para cada cliente.</p>
                </div>
                <div className="integrantes">
                    
                    <div className="adrian">
                        <img src={perfilAdrian} alt="Integrante Adrian" />
                        <p>Adrian Satiro</p>
                        <p>RM97784</p>
                    </div>
                    <div className='caua'>
                        <img src={perfilCaua} alt="Integrante Cauã" />
                        <p>Cauã Alencar</p>
                        <p>RM98638</p>
                    </div>
                    <div className='jaci'>
                        <img src={perfilCaua} alt="Integrante Cauã" />
                        <p>Jaci Teixeira</p>
                        <p>RM99627</p>
                    </div>
                    <div className='sabrina'>
                        <img src={perfilCaua} alt="Integrante Cauã" />
                        <p>Sabrina Faustino</p>
                        <p>RM99570</p>
                    </div>
                    <div className='pedro'>
                        <img src={perfilCaua} alt="Integrante Cauã" />
                        <p>Pedro Henrique</p>
                        <p>RM99726</p>
                    </div>
                </div>
            </main>
        </>
    )
}
