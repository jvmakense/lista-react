import { CardsStyles } from "./styles"

function Cards({number}) {
    return(
        <>
        <CardsStyles>
            <div className="card">

                <div className="card-header">
                    <h3>Contato {number}</h3>
                </div>
                <div className="card-body">
                    <p>joao</p>
                    <p className="margin">numero</p>
                    <p>email</p>
                </div>
            </div>
        </CardsStyles>

        </>
    )
}

export default Cards