'use client'
import portoLogoImg from '/public/static/porto.svg'
import bikeGuyImg from '/public/static/bike-guy.svg'
import { IoArrowBack } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/user-form.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Cadastro() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)
    const [refused, setRefused] = useState(false)
    const onSubmit = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('As senhas não coincidem')
            return
        }
        const user = {
            email,
            senha: password,
        }
        const req = await fetch('/api/cadastro', {
            method: 'POST',
            body: JSON.stringify(user),
        })
        /**
         * @type {{msg: "ok" | "refused" | "error"}}
         */
        const data = await req.json()
        if (data.msg === 'ok') {
            localStorage.setItem('user', JSON.stringify(user))
            router.push('/')
        }
        if (data.msg === 'refused') {
            setRefused(true)
        }
        if (data.msg === 'error') {
            setError(true)
            console.error(
                'Erro no cadastro, por favor tenha certeza que o servidor java está rodando normalmente, link do repositório do servidor:'
            )
        }
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
                    <h1>Faça o seu cadastro</h1>
                    <form action="#" onSubmit={onSubmit}>
                        <div className={styles['dual-input']}>
                            <input type="text" placeholder="Nome" required />
                            <input
                                type="text"
                                placeholder="Email"
                                required
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles['dual-input']}>
                            <input
                                type="text"
                                placeholder="Telefone"
                                required
                            />
                            <input type="text" placeholder="CPF" required />
                        </div>
                        <input
                            type="password"
                            placeholder="Senha"
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirmar senha"
                            required
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <button type="submit">Cadastrar</button>
                    </form>
                    <span>
                        Já possui uma conta? <Link href={'/login'}>Entrar</Link>
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
                <dialog open={error} className={error ? '' : styles['hidden']}>
                    <div>
                        <h1>Erro</h1>
                        <p>
                            Houve um erro ao tentar fazer o cadastro, tente
                            novamente mais tarde ou acesse o console para mais
                            detalhes
                        </p>
                        <button onClick={() => setError(false)}>Ok</button>
                    </div>
                </dialog>
                <dialog
                    open={refused}
                    className={refused ? '' : styles['hidden']}
                >
                    <div>
                        <h1>Recusado</h1>
                        <p>
                            Seu cadastro foi recusado, tenha certeza que você já
                            não possui uma conta
                        </p>
                        <button onClick={() => setRefused(false)}>Ok</button>
                    </div>
                </dialog>
            </main>
        </>
    )
}
