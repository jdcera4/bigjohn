function Income() {
    return (
      <form className="container">
          <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Cedula</label>
              <input type="number" className="form-control" id="exampleInputCedula"  />
          </div>
          <div className="mb-3">
              <label for="disabledSelect" className="form-label">Cargo</label>
              <select id="disabledSelect" className="form-select">
                  <option>Invitado</option>
                  <option>Proveedor</option>
                  <option>Empleado</option>
              </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
  
      </form>
    );
  }
  
  export default Income;