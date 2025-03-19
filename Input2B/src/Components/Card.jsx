function Card(){

    return(
    

    <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">Numero 1</h6>
                <input className="card-title" type="text"></input>
                <h6 className="card-text">Numero 2</h6>
                <input className="card-text" type="text"></input>
                <a id= "boton" href="#" className="btn btn-primary">Calcular</a>
            </div>
            </div>
        </div>
        
    </div>

    );
}

export default Card;