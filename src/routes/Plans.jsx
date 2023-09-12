import PlanCard from "../components/PlanCard";
import "../styles/Plans.css";

export default function Plans() {
    return (
        <main className="plans">
			<div className="plans-title-container">
				<h1>O plano ideal para você e sua bike</h1>
			</div>
			<div className="container-plancards">
				<PlanCard
                    title="Mountain Bike"
                    subtitle="Força e habilidade em meio a natureza"
					sourceImage="/static/bike-mountain.png"
					altImage="Desenho de uma bike"
					text="Cobertura basica
					Bike bagagem*
					Subtração da bike**
					Acidente pessoais individual
					Garantia internacional
					*A cobertura inclui a bicicleta segurada e a mala utilizada para transporte, desde que estejam comprovadamente sob a responsabilidade da companhia aérea ou rodoviária. Essa cobertura é válida durante o trajeto de ida e volta da viagem realizada pelo segurado.
**Não haverá cobertura quando tratar-se de subtração parcial."
				/>
				<PlanCard
                    title="Performance"
                    subtitle="Mais conforto e perfomance no seu pedal"
					sourceImage="/static/bike-performance.png"
					altImage="Desenho de um formulário sendo preenchido"
					text="Cobertura para imprevistos
					Pedalar em maior velocidade
					Ideal para competições internacionais
					Preferência por estradas pavimentadas ou superfícies lisas e sem irregularidades."
				/>
				<PlanCard
                    title="Urbana"
                    subtitle="As bikes urbanas aliam conforto e agilidade"
					sourceImage="/static/bike-urbana.jpg"
					altImage="Prancheta com checklist"
					text="Tranquilidade ao andar de bicicleta pelas ruas da cidade
					Utilização da bike como meio de transporte para trabalho, faculdade 
					Proteção abrangente para você, sua bicicleta e terceiros"
				/>
			</div>
		</main>
    )
}
