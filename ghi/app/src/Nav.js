import { NavLink, Link } from 'react-router-dom';
import cartune_logo from "./images/cartune_logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor:"#f9ecd6" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src={cartune_logo} alt="CarTune logo" width="125px"/></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Inventory
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/manufacturers">Manufacturers List</Link></li>
                    <li><Link className="dropdown-item" to="/models">Vehicles List</Link></li>
                    <li><Link className="dropdown-item" to="/automobiles">Automobiles List</Link></li>
                    <li><Link className="dropdown-item" to="/manufacturers/new">New Manufacturer</Link></li>
                    <li><Link className="dropdown-item" to="/models/new">New Vehicle</Link></li>
                    <li><Link className="dropdown-item" to="/automobiles/new">New Automobile</Link></li>
                  </ul>
                </li>
              </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav" style={{ color: "black" }}>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/appointments/new">New Appointment</Link></li>
                    <li><Link className="dropdown-item" to="/appointments">Appointments List</Link></li>
                    <li><Link className="dropdown-item" to="/appointments/history">Service Appointment History</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sales
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/customers/new">New Customer</Link></li>
                    <li><Link className="dropdown-item" to="/sales/new">New Sales Record</Link></li>
                    <li><Link className="dropdown-item" to="/sales">Sales Records List</Link></li>
                    <li><Link className="dropdown-item" to="/salespersons/sales">Sales Persons History</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Employees
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/salespersons">Sales Persons</Link></li>
                    <li><Link className="dropdown-item" to="/technicians">Technicians</Link></li>
                    <li><Link className="dropdown-item" to="/salespersons/new">New Sales Person</Link></li>
                    <li><Link className="dropdown-item" to="/technicians/new">New Technician</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
