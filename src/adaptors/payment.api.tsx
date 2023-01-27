import { AxiosInstance, AxiosRequestConfig } from "axios";
import preload from "../preload";
import AxiosAPIAdapter from "./instance/axios";

const { protocol, url } = preload();

export class PaymentAPI {
  protected instance: AxiosAPIAdapter;

  constructor(
    advancedOption?: AxiosRequestConfig,
    extendSessionSetup?: (session: AxiosInstance) => void
  ) {
    this.instance = new AxiosAPIAdapter(
      {
        baseURL: `${protocol}://${url}/v1/payments`,
        ...advancedOption,
      },
      extendSessionSetup
    );
  }

  async setHeader(headerKey: string, headerValue: string) {
    await this.instance.setHeader(headerKey, headerValue);
  }

  async confirmPayment(orderId: string, paymentKey: string, amount: number) {
    const result = await this.instance.post<any>("/confirm", {
      orderId,
      paymentKey,
      amount,
    });
    return result.data;
  }
}
