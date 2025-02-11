import { HeaderStyles } from "./styles"
function Header() {
    return(
        <HeaderStyles>
            <>
            <div>
                <h1>Lista de contatos</h1>
            </div>
            <div>
                <input required type="text" placeholder="Nome" />
                <input required type="number" placeholder="numero" />
                <input required type="e-mail" placeholder="E-mail"/>
            </div>
            </>
        </HeaderStyles>

    )
}

export default Header