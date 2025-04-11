import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNavbar = function () {
  return (
    <>
      <Navbar expand="lg" className="Epicodebg" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to={"/"}>
            Epimeteo
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>

              <NavDropdown
                title="Meteo di tutte le regioni d'italia"
                id="basic-nav-dropdown"
              >
                <Link className="dropdown-item" to="/Meteodetails/Calabria">
                  Calabria
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Piemonte">
                  Piemonte
                </Link>
                <Link
                  className="dropdown-item"
                  to="/Meteodetails/Valle d'Aosta"
                >
                  Valle d'Aosta
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Lombardia">
                  Lombardia
                </Link>
                <Link
                  className="dropdown-item"
                  to="/Meteodetails/Trentino-Alto Adige"
                >
                  Trentino-Alto Adige
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Veneto">
                  Veneto
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Toscana">
                  Toscana
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Umbria">
                  Umbria
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Marche">
                  Marche
                </Link>
                <Link
                  className="dropdown-item"
                  to="/Meteodetails/Emilia-Romagna"
                >
                  Emilia-Romagna
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Lazio">
                  Lazio
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Abruzzo">
                  Abruzzo
                </Link>
                <Link
                  className="dropdown-item"
                  to="/Meteodetails/Friuli Venezia Giulia"
                >
                  Friuli-Venezia Giulia
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Liguria">
                  Liguria
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Molise">
                  Molise
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Campania">
                  Campania
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Puglia">
                  Puglia
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Basilicata">
                  Basilicata
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Sicilia">
                  Sicilia
                </Link>
                <Link className="dropdown-item" to="/Meteodetails/Sardegna">
                  Sardegna
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
