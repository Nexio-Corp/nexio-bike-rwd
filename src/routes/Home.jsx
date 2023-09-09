import { Link } from 'react-router-dom'
import '../styles/Home.css'
export default function Home() {
    return (
        <>
            <main className="home">
                <article>
                    <h4>Porto Seguro</h4>
                    <h1>Faça a vistoria da sua bike agora</h1>
                    <h3>Simples e rápido</h3>
                </article>
                <Link to={'/vistoria'}>Começar</Link>
            </main>
        </>
    )
}
