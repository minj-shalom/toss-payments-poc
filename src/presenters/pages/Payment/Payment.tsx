import { useState } from "react";
import reactLogo from "../../../assets/react.svg";
import "./Payment.css";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { generateOrderId } from "../../../utils/generateOrderId";
import preload from "../../../preload";

export default function Payment() {
  const [count, setCount] = useState(0);
  const { clientKey } = preload();
  async function payment() {
    const tossPayments = await loadTossPayments(clientKey);
    tossPayments
      .requestPayment("카드", {
        amount: 200,
        orderId: generateOrderId(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "박토스",
        successUrl: "http://127.0.0.1:5173/success",
        failUrl: "http://127.0.0.1:5173/fail",
      })
      .catch(function (error) {
        if (error.code === "USER_CANCEL") {
          // 결제 고객이 결제창을 닫았을 때 에러 처리
        } else if (error.code === "INVALID_CARD_COMPANY") {
          // 유효하지 않은 카드 코드에 대한 에러 처리
        }
      });
  }
  // http://127.0.0.1:5173/success?orderId=4aX4xT_Fa5wwHT_FjC0mx&paymentKey=vNA96Bjgq7XZYkKL4MrjoY7KmLYZoa80zJwlEWR52xydGPnO&amount=1
  payment();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
