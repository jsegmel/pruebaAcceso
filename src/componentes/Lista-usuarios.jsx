import { useDebugValue, useEffect } from "react";
import { useState } from "react";
import "../componentes/lista-usuarios.css"
import TarjetaUsuario from "./Tarjeta-usuario";

export default function ListaUsuarios(){
    const [usuarios, setUsuarios] = useState([]);
    
    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{console.log(data)
        setUsuarios(data)});
        
    }, []);
      
        
    return(
        <div className="lista-usuarios">
    
           {usuarios.map((usuario)=> <TarjetaUsuario key ={usuario.id}nombre={usuario.name}/>)}
           
        </div>

    )
}

