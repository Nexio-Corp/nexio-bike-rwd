'use client'
import portoLogoImg from '/public/static/porto.svg'
import bikeGuyImg from '/public/static/bike-guy.svg'
import { IoArrowBack } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/user-form.module.css'
export default function Cadastro() {
    return (
        <>
            <main className={styles['form-user']}>
                <section>
                    <section className={styles['top']}>
                        <Link href={'/'}>
                            <IoArrowBack />
                        </Link>
                        <div className={styles['img-div']}>
                            <Image
                                width={300}
                                height={300}
                                src={portoLogoImg}
                                alt="Logo da Porto"
                            />
                        </div>
                    </section>
                    <h1>Faça o seu cadastro</h1>
                    <form action="#" onSubmit={e => e.preventDefault()}>
                        <div className={styles['dual-input']}>
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className={styles['dual-input']}>
                            <input type="text" placeholder="Telefone" />
                            <input type="text" placeholder="CPF" />
                        </div>
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="Confirmar senha" />
                        <button type="submit">Cadastrar</button>
                    </form>
                    <span>
                        Já possui uma conta?{' '}
                        <Link href={'/login'}> Entrar</Link>
                    </span>
                </section>
                <section>
                    <Image
                        width={300}
                        height={300}
                        src={bikeGuyImg}
                        alt="Homem numa bicicleta"
                    />
                </section>
            </main>
        </>
    )
}
