import { Col, Container, Row } from "react-bootstrap";
import meteoImg from "../../src/assets/meteo.jpg";
import notizie from "../../src/assets/notizienonbuone.jpg";
import previsioni from "../../src/assets/previsionidetempo.jpg";
import NapoliImg from "../../src/assets/Napoli.jpg";
import TorinoImg from "../../src/assets/Torino.webp";
import RomaImg from "../../src/assets/Roma.jpg";
import { useNavigate } from "react-router-dom";

const Home = function () {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row className="justify-content-center g-4">
          <Col className="col-12 col-xl-6">
            <h3 className="text-center">sezione notizie del momento</h3>
            <Container>
              <Row>
                <Col className="col-12 ">
                  <div className="d-flex p-2 justify-content-between">
                    <div>
                      <img style={{ height: 100 }} src={meteoImg} alt="meteo" />
                    </div>
                    <div>
                      <img
                        style={{ height: 100 }}
                        src={previsioni}
                        alt="meteo"
                      />
                    </div>
                    <div className="d-none d-md-block">
                      <img style={{ height: 100 }} src={notizie} alt="meteo" />{" "}
                    </div>
                  </div>
                  <p className="text-white fs-4">
                    Se vuoi notizie in tempo reale sei nel posto giusto! , i
                    nostri migliori esperti ogni giorno , si impegnano per
                    riportare le notizie nel modo più veloce e preciso
                    possibile.
                  </p>
                  <p className="text-white fs-4">
                    In questo ultimo periodo abbiamo assisto a un grosso
                    cambiamento climatico , ormai l'iverno , sembra cambiato ,
                    la primavera arriva in ritardo, quali altri cambiamenti
                    dovremmo aspettarci? per saperlo resta connesso nella nostra
                    app per avere aggiornamenti in tempo reale
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="col-12 col-xl-6 ">
            <h3 className="text-center">sezione meteo prossimi giorni</h3>
            <h4 className="text-center text-info">Napoli</h4>
            <Col className="d-flex justify-content-center">
              <div>
                <img
                  className="animazioneig"
                  src={NapoliImg}
                  onClick={() => {
                    navigate("/Meteodetails/Napoli");
                  }}
                />
              </div>
            </Col>
            <h4 className="text-center text-info">Roma</h4>
            <Col className="d-flex justify-content-center">
              <div>
                <a href="/Meteodetails/Roma">
                  <img
                    style={{ height: 350 }}
                    className="animazioneig"
                    src={RomaImg}
                    onClick={() => {
                      navigate("/Meteodetails/Roma");
                    }}
                  />
                </a>
              </div>
            </Col>
            <h4 className="text-center text-info">Torino</h4>
            <Col className="d-flex justify-content-center">
              <div>
                <a href="Meteodetails/Torino">
                  <img
                    style={{ height: 350 }}
                    className="animazioneig"
                    src={TorinoImg}
                    onClick={() => {
                      navigate("/Meteodetails/Torino");
                    }}
                  />
                </a>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
