import React, {useState} from "react";

export default function contador(){
    const [numero, setNumero]=useState(0);
    const aumentar = ()=>{
        setNumero(numero+1);
    };
    const disminuir =()=>{
        setNumero(numero-1);
    };
return(
    <div>
        <h1>Contador</h1>
        <p>Número actual;{numero}</p>
        <button onClick={aumentar}aumentar></button>
        <button onClick={disminuir}disminuir></button>
    </div>
)
}