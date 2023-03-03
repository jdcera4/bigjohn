import Empleados from "../components/empleados/empleados";

function Form() {
  return (
    <div>
    <form className="container mb-5">
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Cedula</label>
            <input type="number" className="form-control" id="exampleInputCedula"  />
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputNombre"/>
        </div>

        <div className="mb-3">
            <label for="disabledSelect" className="form-label">Cargo</label>
            <select id="disabledSelect" className="form-select">
                <option>Mercadeo</option>
                <option>Ti</option>
            </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

    </form>
    <Empleados/>
    </div>
  );
}

export default Form;