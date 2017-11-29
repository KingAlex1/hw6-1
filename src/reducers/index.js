import { combineReducers } from "redux";
import budget from "./budget";
import market from "./market";
import farm from "./farm";


export default combineReducers({
  market,
  farm,
  budget
});

export const getMarketOrders = state => state.market.orders;
export const getFarmOrders = state => state.farm.orders;
export const getBudget = state => state.budget;