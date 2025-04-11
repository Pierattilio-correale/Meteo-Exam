import { Col, Container, Row } from "react-bootstrap";

const Home = function () {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <h3>sezione notizie del momento</h3>
            <Container>
              <Row>
                <Col>
                  <img src="./assets/meteo.jpg" alt="notizie" />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="col-6">
            <h3>sezione meteo prossimi giorni</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
