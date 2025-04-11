import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MeteoCity from "./MeteoCity";

const HomeForm = function () {
  const [inputCity, setInputCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  return (
    <>
      <div className="text-center d-flex flex-column justify-content-center">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h2 className="mt-2 text-white">
                Il meteo della tua città in tempo reale!
              </h2>
              <div className="d-flex justify-content-center my-5">
                <div className="d-flex w-50">
                  <Form.Control
                    type="text"
                    value={inputCity}
                    placeholder="Cerca qui il meteo della tua città"
                    onChange={(e) => setInputCity(e.target.value)}
                  />
                  <Button
                    variant="warning"
                    className="ms-2"
                    onClick={() => setSearchedCity(inputCity)}
                  >
                    <i className="bi bi-search cursorpointer fs-4"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <MeteoCity prop={searchedCity} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default HomeForm;
