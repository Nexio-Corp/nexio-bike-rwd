import { Link } from 'react-router-dom'
import portoLogoImg from '/static/porto.svg'
import bikeGuyImg from '/static/bike-guy.svg'
import { IoArrowBack } from 'react-icons/io5'
import '../styles/user-form.css'
export default function Login() {
    return (
        <>
            <main className="form-user">
                <section>
                    <section className="top">
                        <Link to={'/'}>
                            <IoArrowBack />
                        </Link>
                        <div className="img-div">
                            <img src={portoLogoImg} alt="Logo da Porto" />
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
                        Já possui uma conta? <Link to={'/Login'}> Entrar</Link>
                    </span>
                </section>
                <section>
                    <img src={bikeGuyImg} alt="Homem numa bicicleta" />
                </section>
            </main>
        </>
    )
}
