import { CardsStyles } from "./styles"
import { useDispatch } from "react-redux"
import { removeContact } from "../store/contactsSlice"

function Cards({data}) {
    
    const dispatch = useDispatch();
    
    return(
        <>
        <CardsStyles>
            <div className="card">

                <div className="card-header">
                    <h3>Contato {data.id}</h3>
                    <div className="btns">
                        <button className="btn-editar">Editar</button>
                        <button onClick={() => dispatch(removeContact(data.id))}  className="btn-excluir">Excluir</button>
                    </div>
                </div>
                <div className="card-body">
                    <p>{data.nome}</p>
                    <p className="margin">{data.numero}</p>
                    <p>{data.email}</p>
                </div>
            </div>
        </CardsStyles>

        </>
    )
}

export default Cards