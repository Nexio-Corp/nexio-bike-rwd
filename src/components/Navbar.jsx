'use client'
import portoLogo from '/public/static/porto.svg'
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
    /**
     * Variável que guarda a referencia do div que contém os links
     * @type {React.MutableRefObject<HTMLDivElement>}
     */
    const linksDiv = useRef(null)

    /**
     * Variável que guarda a referencia do div que contém o hamburger
     * @type {React.MutableRefObject<HTMLDivElement>}
     */
    const hamburgerDiv = useRef(null)

    const toggleLinks = () => {
        if ([...linksDiv.current.classList.values()].includes('active')) {
            closeLinks()
        } else {
            linksDiv.current.classList.add('active')
        }
    }
    const closeLinks = () => {
        linksDiv.current.classList.add('deactivating')
        setTimeout(() => {
            linksDiv.current.classList.remove('active')
            linksDiv.current.classList.remove('deactivating')
        }, 300)
    }
    useEffect(() => {
        const closeMenu = e => {
            if (
                !hamburgerDiv.current.contains(e.target) &&
                !linksDiv.current.contains(e.target)
            ) {
                closeLinks()
            }
        }
        document.addEventListener('click', closeMenu)
        return () => {
            document.removeEventListener('click', closeMenu)
        }
    }, [])

    return (
        <>
            <nav>
                <Link href="/">
                    <Image
                        width={300}
                        height={300}
                        src={portoLogo}
                        alt="Logo da Porto"
                    />
                </Link>
                <div className="links" ref={linksDiv}>
                    <Link href="/como-funciona">Como Funciona</Link>
                    <Link href="/planos">Planos</Link>
                    <Link href="/faq">Duvidas Frequentes</Link>
                    <Link href="/nexio">Equipe</Link>
                    <Link className="login" href="/login">
                        Entrar
                    </Link>
                </div>
                <div
                    className="hamburger"
                    onClick={toggleLinks}
                    ref={hamburgerDiv}
                >
                    <HamburgerIcon />
                </div>
            </nav>
        </>
    )
}
