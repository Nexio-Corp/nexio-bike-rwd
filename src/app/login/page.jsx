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
                    <h1>Bem-vindo(a) de volta</h1>
                    <form action="#" onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <a href="#">Esqueceu a senha?</a>
                        <button type="submit">Entrar</button>
                    </form>
                    <span>
                        Não tem uma conta ainda?
                        <Link href={'/cadastro'}> Cadastrar-se</Link>
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
