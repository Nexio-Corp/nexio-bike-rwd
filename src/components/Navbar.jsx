import { Link } from 'react-router-dom'
import portoLogo from '../assets/porto.svg'
import '../styles/Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">
                    <img src={portoLogo} alt="Logo da Porto" />
                </Link>
                <div className="links">
                    <Link to="/como-funciona">Como Funciona</Link>
                    <Link to="/planos">Planos</Link>
                    <Link to="/faq">Duvidas Frequentes</Link>
                    <Link to="/nexio">Equipe</Link>
                    <Link className="login" to="/login">
                        Entrar
                    </Link>
                </div>
            </nav>
        </>
    )
}
