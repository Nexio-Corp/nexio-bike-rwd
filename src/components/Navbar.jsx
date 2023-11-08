'use client'
import portoLogo from '/public/static/porto.svg'
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Navbar.module.css'
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
        if (
            [...linksDiv.current.classList.values()].includes(styles['active'])
        ) {
            closeLinks()
        } else {
            linksDiv.current.classList.add(styles['active'])
        }
    }
    const closeLinks = () => {
        linksDiv.current.classList.add(styles['deactivating'])
        setTimeout(() => {
            linksDiv.current.classList.remove(styles['active'])
            linksDiv.current.classList.remove(styles['deactivating'])
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
            <nav className={styles['navbar']}>
                <Link href="/">
                    <Image
                        width={300}
                        height={300}
                        src={portoLogo}
                        alt="Logo da Porto"
                    />
                </Link>
                <div className={styles['links']} ref={linksDiv}>
                    <Link href="/como-funciona">Como Funciona</Link>
                    <Link href="/planos">Planos</Link>
                    <Link href="/faq">Duvidas Frequentes</Link>
                    <Link href="/nexio">Equipe</Link>
                    <Link className={styles['login']} href="/login">
                        Entrar
                    </Link>
                </div>
                <div
                    className={styles['hamburger']}
                    onClick={toggleLinks}
                    ref={hamburgerDiv}
                >
                    <HamburgerIcon />
                </div>
            </nav>
        </>
    )
}
