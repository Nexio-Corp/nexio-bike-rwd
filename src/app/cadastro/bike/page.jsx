import Link from 'next/link'

export default function BikeRegistration() {
    return (
        <>
            {' '}
            <div className="h1-registration">
                <h1>Cadastro Bike</h1>
                <h2>
                    Preecha todos os campos a baixo para cadastrar sua bicicleta
                </h2>
            </div>
            <main className="bike-registration">
                <form>
                    <div className="form-group">
                        <label htmlFor="Marca">Marca*</label>
                        <select name="Marca" id="Marca" required>
                            <option value="Trek">Trek</option>
                            <option value="Specialized">Specialized</option>
                            <option value="Giant">Giant</option>
                            <option value="Cannondale">Cannondale</option>
                            <option value="Scott">Scott</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Modelo">Modelo*</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Modificacoess">Modificações*</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Valor">Valor*</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Modelo">Nº Chassi*</label>
                        <input type="text" required />
                    </div>
                </form>
                <div className="botao-finalizar">
                    <Link href={'/vistoria'}>Finalizar</Link>
                </div>
            </main>
        </>
    )
}
