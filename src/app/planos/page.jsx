import PlanCard from '@/components/PlanCard'
import styles from '@/styles/Plans.module.css'
export default function Plans() {
    return (
        <>
            <h1>O plano ideal para você e sua bike</h1>
            <div className={styles['plancards-container']}>
                <PlanCard
                    title="Mountain Bike"
                    subtitle="Força e habilidade em meio a natureza"
                    sourceImage="/static/mountain-bike.svg"
                    altImage="Imagem ilustrativa de uma pessoa praticando Mountain Bike"
                    list={[
                        'Cobertura basica',
                        'Bike bagagem*',
                        'Subtração da bike**',
                        'Acidente pessoais individual',
                        'Garantia internacional',
                    ]}
                    notes={[
                        '*A cobertura inclui a bicicleta segurada e a mala utilizada para transporte, desde que estejam comprovadamente sob a responsabilidade da companhia aérea ou rodoviária. Essa cobertura é válida durante o trajeto de ida e volta da viagem realizada pelo segurado.',
                        '**Não haverá cobertura quando tratar-se de subtração parcial.',
                    ]}
                ></PlanCard>
                <PlanCard
                    title="Performance"
                    subtitle="Mais conforto e performance no seu pedal"
                    sourceImage="/static/performance-bike.svg"
                    altImage="Imagem ilustrativa de uma pessoa praticando ciclismo de alta performance"
                    list={[
                        'Cobertura para imprevistos',
                        'Pedalar em maior velocidade',
                        'Ideal para competições internacionais',
                        'Preferência por estradas pavimentadas ou superfícies lisas e sem irregularidades.',
                    ]}
                ></PlanCard>
                <PlanCard
                    title="Urbana"
                    subtitle="As bikes urbanas aliam conforto e agilidade"
                    sourceImage="/static/urban-bike.svg"
                    altImage="Imagem ilustrativa de um homem andando de bicleta usando terno"
                    list={[
                        'Tranquilidade ao andar de bicicleta pelas ruas da cidade',
                        'Utilização da bike como meio de transporte para trabalho, faculdade, passeios, etc.',
                        'Proteção abrangente para você, sua bicicleta e terceiros',
                    ]}
                ></PlanCard>
            </div>
        </>
    )
}
