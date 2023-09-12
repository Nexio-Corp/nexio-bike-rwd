import FAQCard from "../components/FaqCard";
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
                list={list.map((item, i)=>(
                    <ul key={i}>
                        <li>{item}</li>
                    </ul>
                ))}
                subtext="Com nossa ampla variedade de coberturas e serviços, você pode garantir a proteção adequada para o seu meio de transporte preferido. Seja qual for o modelo da sua bicicleta e o tempo de uso, temos a solução certa para você."
            />
        </main>
    )
}

export const list = [
    "Seguro para bicicleta tradicional nova.",
    "Seguro para bicicleta tradicional com até 8 anos de uso.",
    "Seguro para bicicleta elétrica com até 3 anos de uso."
]

