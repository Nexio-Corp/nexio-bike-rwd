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
					sourceImage="/static/little-bike.svg"
					altImage="Desenho de uma bike"
					title="Escolha seu plano"
					text="Oferecemos o plano perfeito para se adequar ao seu perfil de ciclista. Faça a sua escolha e aproveite suas pedaladas com total tranquilidade e segurança."
				/>
				<PlanCard
					sourceImage="/static/form.svg"
					altImage="Desenho de um formulário sendo preenchido"
					title="Preencha os seus dados"
					text="Para inclusão na sua apólice, solicitaremos apenas algumas informações essenciais. Não se preocupe, o processo é rápido e simples!"
				/>
				<PlanCard
					sourceImage="/static/clipboard.svg"
					altImage="Prancheta com checklist"
					title="Faça a vistoria on-line"
					text="Após fornecer suas informações, você só precisará enviar algumas fotos de diferentes ângulos da sua bike, e em questão de minutos, o seu seguro estará pronto."
				/>
			</div>
		</main>
    )
}
