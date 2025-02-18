import { HeaderStyles } from "./styles"
import { addContact } from "../store/contactsSlice";
import { useDispatch } from "react-redux"
import { useState } from "react";
function Header() {

    const dispach = useDispatch();

    const [id, setId] = useState(1);

    const [contato, setContato] = useState({
        id: id,
        nome:'',
        numero:'0',
        email:''
    })

    function handleChange(e) {
        const id = e.target.id;
        const valor = e.target.value;
        setContato ({...contato, [id]: valor})
    }

    function salvarContato() {
        const novo_id = id + 1;
        setId(novo_id);
        setContato({...contato, id: novo_id});

        return {...contato}
    }
    return(
        <HeaderStyles>
            <>
            <div className="titulo">
                <h1>Lista de contatos</h1>
            </div>
            <form>
                <input id="nome" required type="text" placeholder="Nome" value={contato.nome} onChange={(e)=>handleChange(e)} />
                <input id="numero" required type="number" placeholder="numero" value={contato.numero} onChange={(e)=>handleChange(e)} />
                <input id="email" required type="e-mail" placeholder="E-mail" value={contato.email} onChange={(e)=>handleChange(e)}/>
            </form>
            <button onClick={() => dispach(addContact(salvarContato()))}>Salvar</button>
            </>
        </HeaderStyles>

    )
}

export default Header