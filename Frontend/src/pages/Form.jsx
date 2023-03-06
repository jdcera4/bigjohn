import React, {useEffect, useState} from "react";
import axios from 'axios';

import Empleados from "../components/empleados/empleados";

function Form() {

    const [empleado, setEmpleado] = useState();

    useEffect(() => {
        axios({
            url: 'http://localhost:3000/empleados/',
            method: 'get',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: false
        }).then(res => res.son())
    }, []);

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