import Link from 'next/link'
import styles from '@/styles/Home.module.css'
export default function Home() {
    return (
        <>
            <main className={styles['home']}>
                <article>
                    <h4>Porto Seguro</h4>
                    <h1>Faça a vistoria da sua bike agora</h1>
                    <h3>Simples e rápido</h3>
                </article>
                <Link href={'/cadastro/bike'}>Começar</Link>
            </main>
        </>
    )
}
