import { Navbar, Container, NavDropdown, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = function () {
  return (
    <>
      <h4 className="text-center text-dark mb-5 mt-2">
        Ecco il meteo di alcune delle città più famose d'italia!
      </h4>
      <Container>
        <Row className="g-2">
          <Col className="col-6 col-md-4 col-lg-3 mb-3  ">
            <Link
              className="textspecial text-decoration-none"
              to="/Meteodetails/Ancona"
            >
              Ancona
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Brescia"
            >
              Brescia
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Ferrara"
            >
              Ferrara
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Livorno"
            >
              Livorno
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Napoli"
            >
              Napoli
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Perugia"
            >
              Perugia
            </Link>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3 mb-3 ">
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Aosta"
            >
              Aosta
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Cagliari"
            >
              Cagliari
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Messina"
            >
              Messina
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Paternò"
            >
              Paternò
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Reggio Calabria"
            >
              Reggio Calabria
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Siena"
            >
              Siena
            </Link>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3 mb-3 ">
            <Link className="dropdown-item textspecial" to="/Meteodetails/Bari">
              Bari
            </Link>
            <Link className="dropdown-item textspecial" to="/Meteodetails/Roma">
              Roma
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Milano"
            >
              Milano
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Padova"
            >
              Padova
            </Link>
            <Link className="dropdown-item textspecial" to="/Meteodetails/Pisa">
              Pisa
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Taranto"
            >
              Taranto
            </Link>
          </Col>
          <Col className="col-12 col-xl-2 col-md-4 col-xs-6 col-lg-3">
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Bologna"
            >
              Bologna
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Catanzaro"
            >
              Catanzaro
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Genova"
            >
              Genova
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Monza"
            >
              Monza
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Torino"
            >
              Torino
            </Link>
            <Link
              className="dropdown-item textspecial"
              to="/Meteodetails/Parma"
            >
              Parma
            </Link>
          </Col>
        </Row>
      </Container>
      <h4 className="text-center my-3">
        Non dimenticatevi di seguirci su tutti i social!
      </h4>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-3">
            <Row>
              <Col className="col-3">
                <i className="bi bi-facebook ms-2"></i>
              </Col>
              <Col className="col-3">
                <i className="bi bi-instagram ms-2"></i>
              </Col>

              <Col className="col-3">
                <i className="bi bi-telegram ms-2"></i>
              </Col>
            </Row>

            <Row className="g-3 mt-3">
              <Col className="mt-3">
                <Col className="mt-3">
                  <p>All rights are reserved ©</p>
                </Col>
                <Col className="mt-3">
                  <p>Dedica Epicode-Epic Education</p>
                </Col>
                <Col className="mt-3">
                  <p>Corso Fullstack - {new Date().getFullYear()}</p>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
