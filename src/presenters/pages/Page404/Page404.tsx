import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import "./Page404.scss";

export default function Page404() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="page404">
      <div className="page404__text-component">
        <div className="page404__text-component__404">404</div>
        <Divider className="page404__text-component__divider" type="vertical" />
        <div className="page404__text-component__text">
          <div className="page404__text-component__text__title">
            Page not found
          </div>
          <div className="page404__text-component__text__subtitle">
            Please check the URL in the address bar and try again.
          </div>
        </div>
      </div>
      <div className="page404__button-component">
        <Button
          className="page404__button-component__home"
          type="primary"
          onClick={goToHome}
        >
          Go back home
        </Button>
      </div>
    </div>
  );
}
