import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useConfirmPayment } from "../../../interactors/payment.service";
import "./Success.scss";

export default function Success() {
  const { confirmPayment } = useConfirmPayment();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const orderId = String(searchParams.get("orderId"));
  const paymentKey = String(searchParams.get("paymentKey"));
  const amount = Number(searchParams.get("amount"));

  const goToHome = () => {
    navigate("/");
  };

  confirmPayment(orderId, paymentKey, amount);

  return (
    <div className="App">
      <h1>결제 완료</h1>
      <Button className="App__button" type="primary" onClick={goToHome}>
        Go back home
      </Button>
    </div>
  );
}
