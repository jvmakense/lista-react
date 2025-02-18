import { HeaderStyles } from "./styles"
import { contactsSlice } from "../store/contactsSlice"
import { addContact } from "../store/contactsSlice";
import { useDispatch } from "react-redux"
function Header() {

    const dispach = useDispatch();
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
            <button onClick={() => dispach(addContact())}>Salvar</button>
            </>
        </HeaderStyles>

    )
}

export default Header