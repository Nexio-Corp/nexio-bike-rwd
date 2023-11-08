import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <h1>404 - Pagina não encontrada</h1>
            <Link href={'/'}>Voltar para a pagina principal</Link>
        </>
    )
}
