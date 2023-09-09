import { Link } from 'react-router-dom'
import portoLogo from '../assets/porto.svg'
import '../styles/Navbar.css'
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi'
import { useRef } from 'react'
export default function Navbar() {
    /**
     * Variável que guarda a referencia do div que contém os links
     * @type {React.MutableRefObject<HTMLDivElement>}
     */
    const linksDiv = useRef(null)

    const toggleLinks = () => {
        if ([...linksDiv.current.classList.values()].includes('active')) {
            linksDiv.current.classList.add('deactivating')
            setTimeout(() => {
                linksDiv.current.classList.remove('active')
                linksDiv.current.classList.remove('deactivating')
            }, 300)
        } else {
            linksDiv.current.classList.add('active')
        }
    }

    return (
        <>
            <nav>
                <Link to="/">
                    <img src={portoLogo} alt="Logo da Porto" />
                </Link>
                <div className="links" ref={linksDiv}>
                    <Link to="/como-funciona">Como Funciona</Link>
                    <Link to="/planos">Planos</Link>
                    <Link to="/faq">Duvidas Frequentes</Link>
                    <Link to="/nexio">Equipe</Link>
                    <Link className="login" to="/login">
                        Entrar
                    </Link>
                </div>
                <div className="hamburger" onClick={toggleLinks}>
                    <HamburgerIcon />
                </div>
            </nav>
        </>
    )
}
