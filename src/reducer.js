import { Star } from "@material-ui/icons";

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action, "action111");
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // logic for adding the item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // logic for removing the item to the basket

      // clone the bucket
      let newBasket = [...state.basket];

      // we check to see if the product is exist it....
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item is exist in basket,remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove the product ( id:${action.id}) it is not in the basket`
        );
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;
