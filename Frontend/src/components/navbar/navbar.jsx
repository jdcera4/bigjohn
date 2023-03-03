import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar bg-dark flex" data-bs-theme="dark">
            <a className="navbar-brand mr" href="/">Crear empleado</a>
            <a className="navbar-brand mr" href="/create-income">Registrar Ingreso</a>
            <a className="navbar-brand mr" href="/guests">Invitados/Proveedores</a>
        </nav>
    );
  }
  
  export default Navbar;