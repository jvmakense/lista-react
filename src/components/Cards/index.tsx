import { CardsStyles } from "./styles"

function Cards({number, data}) {
    
    return(
        <>
        <CardsStyles>
            <div className="card">

                <div className="card-header">
                    <h3>Contato {number}</h3>
                </div>
                <div className="card-body">
                    <p>{data.nome}</p>
                    <p className="margin">numero</p>
                    <p>{data.nome}</p>
                </div>
            </div>
        </CardsStyles>

        </>
    )
}

export default Cards