import { CREATE_ORDER } from "../actions/marketTypes";
import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const market = (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_FARM:
      return {
        orders: state.orders.filter(value => value.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default market;