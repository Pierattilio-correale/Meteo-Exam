import { Container, Row, Col } from "react-bootstrap";

const Footer = function () {
  return (
    <>
      <h4 className="text-center text-dark mb-5 mt-2">
        Ecco il meteo di alcune delle città più famose d'italia!
      </h4>
      <Container>
        <Row className="g-2">
          <Col className="col-6 col-md-4 col-lg-3 mb-3">
            <a
              className="textspecial text-decoration-none"
              href="/Meteodetails/Ancona"
            >
              Ancona
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Brescia"
            >
              Brescia
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Ferrara"
            >
              Ferrara
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Livorno"
            >
              Livorno
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Napoli"
            >
              Napoli
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Perugia"
            >
              Perugia
            </a>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3 mb-3">
            <a className="dropdown-item textspecial" href="/Meteodetails/Aosta">
              Aosta
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Cagliari"
            >
              Cagliari
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Messina"
            >
              Messina
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Paternò"
            >
              Paternò
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Reggio Calabria"
            >
              Reggio Calabria
            </a>
            <a className="dropdown-item textspecial" href="/Meteodetails/Siena">
              Siena
            </a>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3 mb-3">
            <a className="dropdown-item textspecial" href="/Meteodetails/Bari">
              Bari
            </a>
            <a className="dropdown-item textspecial" href="/Meteodetails/Roma">
              Roma
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Milano"
            >
              Milano
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Padova"
            >
              Padova
            </a>
            <a className="dropdown-item textspecial" href="/Meteodetails/Pisa">
              Pisa
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Taranto"
            >
              Taranto
            </a>
          </Col>
          <Col className="col-12 col-xl-2 col-md-4 col-xs-6 col-lg-3">
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Bologna"
            >
              Bologna
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Catanzaro"
            >
              Catanzaro
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Genova"
            >
              Genova
            </a>
            <a className="dropdown-item textspecial" href="/Meteodetails/Monza">
              Monza
            </a>
            <a
              className="dropdown-item textspecial"
              href="/Meteodetails/Torino"
            >
              Torino
            </a>
            <a className="dropdown-item textspecial" href="/Meteodetails/Parma">
              Parma
            </a>
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
