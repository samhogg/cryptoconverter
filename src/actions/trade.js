import { TRADE_EXECUTE } from "../constants/actionTypes";

const executeTrade = e => {
  e.preventDefault();
  return {
    type: TRADE_EXECUTE
  };
};

export { executeTrade };
