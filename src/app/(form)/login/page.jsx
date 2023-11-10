'use client'
import portoLogoImg from '/public/static/porto.svg'
import bikeGuyImg from '/public/static/bike-guy.svg'
import { IoArrowBack } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/user-form.module.css'
import { useState } from 'react'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async e => {
        e.preventDefault()
        const user = {
            email,
            senha: password,
        }
        const req = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(user),
        })
        /**
         * @type {{msg: "ok" | "refused" | "error"}}
         */
        const data = await req.json()
        console.log(data)
    }
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
                    <h1>Bem-vindo(a) de volta</h1>
                    <form action="#" onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <a href="#">Esqueceu a senha?</a>
                        <button type="submit">Entrar</button>
                    </form>
                    <span>
                        Não tem uma conta ainda?{' '}
                        <Link href={'/cadastro'}>Cadastrar-se</Link>
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
