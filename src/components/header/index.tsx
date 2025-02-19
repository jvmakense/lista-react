import { HeaderStyles } from "./styles"
import { addContact, updateContact } from "../store/contactsSlice";
import { useDispatch, useSelector } from "react-redux"
function Header() {

    const contato = useSelector(state=>state.contacts.contact);
    const dispach = useDispatch();
    return(
        <HeaderStyles>
            <>
            <div className="titulo">
                <h1>Lista de contatos</h1>
            </div>
            <form>
                <input onChange={(e) => dispach(updateContact(e))} id="nome" required type="text" placeholder="Nome" value={contato.nome}  />
                <input onChange={(e) => dispach(updateContact(e))} id="numero" required type="number" placeholder="numero" value={contato.numero} />
                <input onChange={(e) => dispach(updateContact(e))} id="email" required type="e-mail" placeholder="E-mail" value={contato.email} />
            </form>
            <button onClick={() => dispach(addContact())}>Salvar</button>
            </>
        </HeaderStyles>

    )
}

export default Header