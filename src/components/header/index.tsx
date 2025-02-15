import { HeaderStyles } from "./styles"
function Header() {

    function salvar() {
        alert('clicou')
        
    }
    return(
        <HeaderStyles>
            <>
            <div className="titulo">
                <h1>Lista de contatos</h1>
            </div>
            <form>
                <input id="nome" required type="text" placeholder="Nome" />
                <input id="numero" required type="number" placeholder="numero" />
                <input id="email" required type="e-mail" placeholder="E-mail"/>
            </form>
            <button onClick={salvar}>Salvar</button>
            </>
        </HeaderStyles>

    )
}

export default Header