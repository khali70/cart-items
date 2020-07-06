import { INC, DEC, DEL, RES_CARD, TOUGLE_AMOUNT, GET_TOTALS } from "./actions";
import cartItems from "../../cart-items";
const initStore = {
  cart: cartItems,
  total: 3,
  amount: 3,
};
const reducer = (state = initStore, action) => {
  let tempCart = [];

  switch (action.type) {
    case TOUGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            action.payload.toggle === INC
              ? (item = { ...item, amount: item.amount + 1 })
              : (item = { ...item, amount: item.amount - 1 });
          }
          return item;
        }),
      };

    case DEL:
      console.log(DEL);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case RES_CARD:
      console.log(RES_CARD);
      return { ...state, cart: [] };

    case GET_TOTALS:
      console.log(GET_TOTALS);
      let { total, amount } = state.cart.reduce(
        (cartTotal, cardItem) => {
          const { price, amount } = cardItem;
          const itemtotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemtotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    default:
      return state;
  }
};
export default reducer;
