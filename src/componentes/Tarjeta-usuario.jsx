import IMG from "./imagenes/usuario.png"
import "../componentes/tarjeta-usuario.css"
export default function TarjetaUsuario({nombre}){

    return(
        <div className="container-usuario">
            <div className="foto-container">
                <img className="foto-usuario" src={IMG} alt="foto-usuario" />
            </div>
            
            <div className="nombre">{nombre}</div>

        </div>
    )

}