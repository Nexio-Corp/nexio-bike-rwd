import FAQCard from "../components/FAQCard";
import  "../styles/FAQ.css";

export default function FAQ() {
    return (
        <main className="faq">
            <div className="faq-title">
                <h1>Dúvidas frequentes sobre o seguro</h1>  
            </div>
            <FAQCard
                title="Posso contratar o seguro de bike para bicicleta usada?"
                text="Oferecemos diversas opções de seguro para atender às suas necessidades:"
                list={[
                    "Seguro para bicicleta tradicional nova.",
                    "Seguro para bicicleta tradicional com até 8 anos de uso.",
                    "Seguro para bicicleta elétrica com até 3 anos de uso.",
                ]}
                subtext="Com nossa ampla variedade de coberturas e serviços, você pode garantir a proteção adequada para o seu meio de transporte preferido. Seja qual for o modelo da sua bicicleta e o tempo de uso, temos a solução certa para você."
            />
            <FAQCard
                title="O seguro de bike oferece cobertura para furto?"
                text=""
                /*"O seguro de bicicleta não oferece cobertura para eventos simples, como o desaparecimento inexplicável da bicicleta ou situações de roubo que não deixem vestígios visíveis. Essas circunstâncias não estão contempladas na apólice de seguro para bicicletas."*/
            />
            <FAQCard
                title="Quais são os documentos necessários para contratar o seguro de bike?"
                text=""
                /*"Em algumas situações, principalmente em caso de sinistro, a Porto solicitará a nota fiscal da bike. Caso tenha sido comprada no exterior, também pode ser necessário apresentar o documento que confirma o país de origem."*/
            />
            <FAQCard
                title="O seguro de bike cobre qualquer tipo de acessório?"
                text=""
                /*"Os acessórios que possui cobertura:"
                list={[
                    "Ciclocomputadores",
                    "GPS",
                    "Velocímetros"
                ]}
                subtext="Os acessórios que não possui cobertura:"
                list2={[
                    "Capacetes",
                    "Luvas",
                    "Squeezes",
                    "Mochilas",
                    "Roupas",
                    "Ferramentas"
                ]}*/
            />
        </main>
    )
}
