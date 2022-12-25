
import "../componentes/principal.css"
import Encabezado from "./Encabezado"
import ListaUsuarios from "./Lista-usuarios"
export default function Principal(){

    return(
        <div className="principal">
            <Encabezado titulo="USUARIOS"/>
            <ListaUsuarios />
        </div>
    )
}