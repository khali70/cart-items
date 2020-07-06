export const INC = "INCREASE";
export const DEC = "DECREASE";
export const DEL = "DELETE";
export const RES_CARD = "RESET_CARD";
export const GET_TOTALS = "GET_TOTALS";
export const TOUGLE_AMOUNT = "TOUGLE_AMOUNT";

export const delet = (id) => {
  return { type: DEL, payload: { id } };
};
export const toggleAmount = (id, toggle) => {
  return { type: TOUGLE_AMOUNT, payload: { id, toggle } };
};
export const getTotal = () => {
  return { type: GET_TOTALS };
};
export const reset = () => {
  return { type: RES_CARD };
};
