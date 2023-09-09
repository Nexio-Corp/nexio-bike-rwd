import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <h1>404 - Pagina não encontrada</h1>
            <Link to={'/'}>Voltar para a pagina principal</Link>
        </>
    )
}
