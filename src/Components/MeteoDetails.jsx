import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MeteoDetails = function () {
  const params = useParams();
  console.log(params);

  const URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const urlKey = "&appid=d304fba74956531f3fe09c3644b753eb";

  const URLcity = params.meteoId;
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
      <h2 className="text-center my-4 text-light">
        Ecco le previsioni aggiornate ogni 3 ore dei prossimi 5 giorni
      </h2>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          {data.list.map((meteo) => {
            const tempmaxC = (meteo.main.temp_max - 273.15).toFixed(2);
            const tempminC = (meteo.main.temp_min - 273.15).toFixed(2);
            const iconCode = meteo.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

            return (
              <Col xs={12} sm={6} md={4} lg={3} key={meteo.dt}>
                <Card className="my-2 bg-info">
                  <Card.Body>
                    <h3 className="text-center">{data.city.name}</h3>
                    <h4 className="text-center">Temperatura:</h4>
                    <div className="d-flex align-items-center">
                      <p className="fs-5 fw-bold mb-0">Massima {tempmaxC}°C</p>
                      <img
                        style={{ height: 50 }}
                        src={iconUrl}
                        alt={meteo.weather[0].description}
                        className="weather-icon ms-2"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="fs-5 fw-bold mb-0">Minima {tempminC}°C</p>
                      <img
                        style={{ height: 50 }}
                        src={iconUrl}
                        alt={meteo.weather[0].description}
                        className="weather-icon ms-2"
                      />
                    </div>
                    <div className="text-dark">
                      <p className="fs-5  mt-2">
                        Umidità {meteo.main.humidity} %
                      </p>
                    </div>
                    <div className="text-dark">
                      <p className="fs-5  mt-2">
                        Pressione {meteo.main.pressure} hPa
                      </p>
                    </div>
                    <div className="text-dark">
                      <p className="fs-5  mt-2">
                        Livello del mare {meteo.main.sea_level} mbar
                      </p>
                    </div>
                    <div>
                      <p> Orario: {meteo.dt_txt}</p>
                    </div>
                    <div>
                      <p className="fw-bold mb-0">today the temperature is </p>
                    </div>
                    <div>
                      <p className="fs-3 mt-0">
                        {meteo.weather[0].description}{" "}
                      </p>
                    </div>
                    <div className="text-center">
                      <img
                        style={{ height: 100 }}
                        src={iconUrl}
                        alt={meteo.weather[0].description}
                        className="weather-icon ms-2"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default MeteoDetails;
