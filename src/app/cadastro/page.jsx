'use client'
import portoLogoImg from '/public/static/porto.svg'
import bikeGuyImg from '/public/static/bike-guy.svg'
import { IoArrowBack } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
export default function Login() {
    return (
        <>
            <main className="form-user">
                <section>
                    <section className="top">
                        <Link href={'/'}>
                            <IoArrowBack />
                        </Link>
                        <div className="img-div">
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
                        <div className="dual-input">
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="dual-input">
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
