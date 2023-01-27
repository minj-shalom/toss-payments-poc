import { PaymentAPI } from "../adaptors/payment.api";
import preload from "../preload";

const paymentAPI = new PaymentAPI();

export function useConfirmPayment() {
  const confirmPayment = async (
    orderId: string,
    paymentKey: string,
    amount: number
  ) => {
    const { secretKey } = preload();
    await paymentAPI.setHeader("Authorization", `Basic ${secretKey}`);
    await paymentAPI.setHeader("Content-Type", "application/json");
    const data = await paymentAPI.confirmPayment(orderId, paymentKey, amount);
    return data;
  };

  return { confirmPayment };
}
