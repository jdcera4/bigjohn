import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar bg-dark flex" data-bs-theme="dark">
                <a className="navbar-brand mr" href="/" >Home</a>
                <a className="navbar-brand" href="/create-empleado">Crear empleado</a>
        </nav>
    );
  }
  
  export default Navbar;