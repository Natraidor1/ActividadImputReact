import { useState } from "react";
import '../Components/Card.css'

function Card(){

    const [numero1, setNumero1] = useState("")
    const [numero2, setNumero2] = useState("")
    const [Resultado, setResultado] = useState("")


    const Sumar = () => {

        const suma = parseFloat(numero1) + parseFloat(numero2);
        setResultado(suma);
    };


   const Restar = () =>{

        const resta = parseFloat(numero1) - parseFloat(numero2);
        setResultado(resta);
   };

   const Multiplicar = () =>{

    const multiplicar = parseFloat(numero1) * parseFloat(numero2);
    setResultado(multiplicar);

   };

   const Division = () =>{

    const division = parseFloat(numero1) / parseFloat(numero2);
    setResultado(division);
   }

   const Limpiar  = () =>{
    setNumero1("")
    setNumero2("")
    setResultado("")
   } 

   

    return(
    

    <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
            <div className="card-body">
                <h6 className="card-title">Numero 1</h6>
                <input className="card-title" type="text" value={numero1} onChange={(texto) => setNumero1(texto.target.value)}></input>
                <h6 className="card-text">Numero 2</h6>
                <input className="card-text" type="text" value={numero2} onChange={(texto) => setNumero2(texto.target.value)}></input><br/>
                <a id= "boton" href="#" className="btn btn-primary" onClick={Sumar}>Sumar</a> 
                <a id= "boton" href="#" className="btn btn-primary" onClick={Restar}>Restar</a> 
                <a id= "boton" href="#" className="btn btn-primary" onClick={Multiplicar}>Multiplicar</a> 
                <a id= "boton" href="#" className="btn btn-primary" onClick={Division}>Dividir</a> 
                <a id= "btnLimpiar" href="#" className="btn btn-primary" onClick={Limpiar} >Limpiar</a> 
                <br/><br/>    
                <h5>El resultado es: {Resultado}</h5>
            </div>
            </div>
        </div>
        
    </div>

    );
};

export default Card;