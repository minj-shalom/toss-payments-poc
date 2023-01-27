export function generateOrderId() {
  const num = "0123456789";
  const small = "abcdefghijklmnopqrstuvwxyz";
  const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbol = "-_=";

  const numArray = [...num];
  const smallArray = [...small];
  const largeArray = [...large];
  const symbolArray = [...symbol];

  const getRandom = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min);

  const orderIdList = [];
  let value;
  let type;
  let i;
  let orderId = "";

  for (i = 0; i < 64; i += 1) {
    type = getRandom(0, 4);
    switch (type) {
      case 0:
        value = numArray[getRandom(0, numArray.length)];
        break;
      case 1:
        value = smallArray[getRandom(0, smallArray.length)];
        break;
      case 2:
        value = largeArray[getRandom(0, largeArray.length)];
        break;
      default:
        value = symbolArray[getRandom(0, symbolArray.length)];
        break;
    }
    orderIdList.push(value);
  }

  orderIdList.sort(() => Math.random() - 0.5);

  orderId = orderIdList.join("");

  return orderId;
}
