'use client'
import styles from '@/styles/BikeRegistration.module.css'
import { useRouter } from 'next/navigation'

export default function BikeRegistration() {
    const router = useRouter()
    if (!localStorage.getItem('user')) {
        router.push('/cadastro')
    }
    const onSubmit = e => {
        e.preventDefault()
        router.push('/vistoria')
    }
    return (
        <>
            <div className={styles['h1-registration']}>
                <h1>Cadastro Bike</h1>
                <h2>
                    Preencha todos os campos a baixo para cadastrar sua
                    bicicleta
                </h2>
            </div>
            <main className={styles['bike-registration']}>
                <form onSubmit={onSubmit}>
                    <div className={styles['form-group']}>
                        <label htmlFor="marca">Marca*</label>
                        <select name="marca" id="marca" required>
                            <option value="Trek">Trek</option>
                            <option value="Specialized">Specialized</option>
                            <option value="Giant">Giant</option>
                            <option value="Cannondale">Cannondale</option>
                            <option value="Scott">Scott</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="modelo">Modelo*</label>
                        <input id="modelo" name="modelo" type="text" required />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="mods">Modificações*</label>
                        <input id="mods" name="mods" type="text" required />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="valor">Valor*</label>
                        <input
                            id="valor"
                            name="valor"
                            type="number"
                            step="any"
                            min={1}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="numero">Nº Chassi*</label>
                        <input id="numero" name="numero" type="text" required />
                    </div>
                    <button type="submit">Finalizar</button>
                </form>
            </main>
        </>
    )
}
