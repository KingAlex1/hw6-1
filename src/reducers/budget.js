import { CREATE_ORDER } from "../actions/marketTypes";
import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";


const budget = (
  state = {
    profit: 0,
    marketExpance: 0,
    farmExpanse: 0,
    deliveryExpanse: 0
  },
  action
) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        marketExpance: state.marketExpance + 20
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: state.farmExpanse + 100
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse + 20
      };
    default:
      return state;
  }
};

export default budget;