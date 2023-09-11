import { Link, useNavigate } from 'react-router-dom'
import portoLogoImg from '/static/porto.svg'
import bikeGuyImg from '/static/bike-guy.svg'
import { IoArrowBack } from 'react-icons/io5'
import '../styles/user-form.css'
export default function Login() {
    const navigate = useNavigate()
    return (
        <>
            <main className="form-user">
                <section>
                    <section className="top">
                        <a
                            onClick={e => {
                                e.preventDefault
                                navigate(-1)
                            }}
                        >
                            <IoArrowBack />
                        </a>
                        <div className="img-div">
                            <img src={portoLogoImg} alt="Logo da Porto" />
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
                        <Link to={'/cadastro'}> Cadastrar-se</Link>
                    </span>
                </section>
                <section>
                    <img src={bikeGuyImg} alt="Homem numa bicicleta" />
                </section>
            </main>
        </>
    )
}
