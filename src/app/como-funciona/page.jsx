import InfoCard from '@/components/InfoCard'

export default function HowItWorks() {
    return (
        <main className="how-it-works">
            <div className="how-it-works-title-container">
                <h1>Faça seu seguro com passos simples e rápidos</h1>
            </div>
            <div className="how-it-works-title-container">
                <h2>
                    Sem dor de cabeça e longas burocracias, seu seguro na palma
                    da sua mão
                </h2>
            </div>
            <div className="container-infocards">
                <InfoCard
                    sourceImage="/static/little-bike.svg"
                    altImage="Desenho de uma bike"
                    title="Escolha seu plano"
                    text="Oferecemos o plano perfeito para se adequar ao seu perfil de ciclista. Faça a sua escolha e aproveite suas pedaladas com total tranquilidade e segurança."
                />
                <InfoCard
                    sourceImage="/static/form.svg"
                    altImage="Desenho de um formulário sendo preenchido"
                    title="Preencha os seus dados"
                    text="Para inclusão na sua apólice, solicitaremos apenas algumas informações essenciais. Não se preocupe, o processo é rápido e simples!"
                />
                <InfoCard
                    sourceImage="/static/clipboard.svg"
                    altImage="Prancheta com checklist"
                    title="Faça a vistoria on-line"
                    text="Após fornecer suas informações, você só precisará enviar algumas fotos de diferentes ângulos da sua bike, e em questão de minutos, o seu seguro estará pronto."
                />
            </div>
            <div className="container-blue"></div>
        </main>
    )
}
