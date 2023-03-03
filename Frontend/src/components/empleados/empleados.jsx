import './empleados.css';

function Empleados() {
    return (
            <div className="hstack gap-3 container mb-4">
                <div className="form-control me-auto">hola</div>
                <button type="button" className="btn btn-secondary">Editar</button>
                <div className="vr"></div>
                <button type="button" className="btn btn-outline-danger">Eliminar</button>
            </div>
    );
  }
  
  export default Empleados;