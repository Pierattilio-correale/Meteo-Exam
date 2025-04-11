import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const urlKey = "&appid=d304fba74956531f3fe09c3644b753eb";

const MeteoCity = function (props) {
  const URLcity = props.prop;
  const [data, setData] = useState(null);
  const [dataImg, setDataImg] = useState(null);

  const getMeteo = () => {
    if (!URLcity) return;
    fetch(URL + URLcity + urlKey)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log("Errore nella promise", err);
      });
  };

  useEffect(() => {
    getMeteo();
  }, [URLcity]);

  const getMeteoImg = () => {
    if (!URLcity) return;
    const URL2 = "https://api.pexels.com/v1/search?query=";
    fetch(URL2 + URLcity + "&per_page=1&page=1", {
      headers: {
        Authorization:
          "TRqDc8JVUsAUANm3pY4t1DhcLKXD7HKnBloKCvnFa7weEUksG0zTMstM",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((dataImg) => {
        console.log(dataImg);
        setDataImg(dataImg);
      })
      .catch((err) => {
        console.log("Errore nella promise", err);
      });
  };

  useEffect(() => {
    getMeteoImg();
  }, [URLcity]);

  if (!data || !dataImg) {
    return <div className="d-flex justify-content-center"></div>;
  }

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-8 w-100 col-lg-10 col-md-6 col-xs-4">
            {data.list.slice(0, 1).map((meteo) => {
              const tempmaxC = (meteo.main.temp_max - 273.15).toFixed(2);
              const tempminC = (meteo.main.temp_min - 273.15).toFixed(2);
              const iconCode = meteo.weather[0].icon;
              const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

              return (
                <Card key={meteo.dt} className="my-2 bg-warning">
                  <Card.Body>
                    <Card.Title>{data.city.name}</Card.Title>
                    <div>Temperatura:</div>
                    <div className="d-flex justify-content-evenly">
                      <div className="fs-5 fw-bold">
                        Massima {tempmaxC}°C{" "}
                        <img
                          src={iconUrl}
                          alt={meteo.weather[0].description}
                          className="weather-icon"
                        />
                      </div>
                      <div className="fs-5 fw-bold">
                        Minima {tempminC}°C{" "}
                        <img
                          src={iconUrl}
                          alt={meteo.weather[0].description}
                          className="weather-icon"
                        />
                      </div>
                    </div>
                    <br />
                    Orario: {meteo.dt_txt}
                    <div className="my-3">
                      <h4>Se vuoi vedere il meteo per i prossimi 5 giorni</h4>
                      <Link
                        className="btn btn-success"
                        to={"/Meteodetails/" + data.city.name}
                      >
                        Clicca qui!
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
            {dataImg && dataImg.photos && dataImg.photos[0] && (
              <>
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col className="col-8 w-100 col-lg-10 col-md-6 col-xs-4">
                      <Card>
                        <Card.Img
                          variant="top"
                          src={dataImg.photos[0].src.original}
                          alt="Città"
                          className="img-fluid mb-3"
                        />
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MeteoCity;
