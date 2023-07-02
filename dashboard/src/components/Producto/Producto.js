import React from 'react'
import './Producto.css';

function Producto(props) {
    return (
        <div className = "Contenedor-Productos">
            <div className = "CampoID-Producto">
                <h3 className = "Info-Producto">{props.id}</h3>
            </div>
            <div className = "CampoNombre-Producto">
                <h3 className = "Info-Producto">{props.name}</h3>
            </div>
            <div className = "CampoDescripcion-Producto">
                <h3 className = "Info-Producto">{props.description}</h3>
            </div>
            <div className = "CampoPrecio-Producto">
                <h3 className = "Info-Producto">{props.price}</h3>
            </div>
        </div>
    )
}

Producto.defaultProps = {
    name: "Nombre no recibido"
}

export default Producto;