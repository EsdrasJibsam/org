import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //  return <opcion>equipo<opcion/>
    //})

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.setEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map( (equipo, index) => 
                <option key={index} value={equipo}>{equipo}</option> 
            )}
        </select>
    </div>
}

export default ListaOpciones