import { MOVE_ORDER_TO_CUSTOMER } from "./farmTypes";

export function moveOrderToCustomer(payload) {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload
  };
}
