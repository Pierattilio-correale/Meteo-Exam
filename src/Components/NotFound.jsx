import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = function () {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center mt-5 text-light">
        <h2>404 - Pagina NON TROVATA</h2>

        <p>
          Vuoi tornare in{" "}
          <Link to="/" className="text-warning">
            HOME
          </Link>{" "}
          ?
        </p>
        <p>
          Puoi anche utilizzare questo{" "}
          <Button
            variant="success"
            onClick={() => {
              navigate("/");
            }}
          >
            Torna in home
          </Button>
        </p>
      </div>
      <div className="invisible my-5">
        space space space space space space space space
      </div>
    </>
  );
};
export default NotFound;
