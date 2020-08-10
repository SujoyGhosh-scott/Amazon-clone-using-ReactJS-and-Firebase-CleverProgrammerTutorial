export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((ammount, item) => item.price + ammount, 0);

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case "REMOVE_FROM_BASKET":
      //logic for removing form basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        //removing item from the basket

        //finding item
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in the basket`
        );
      }

      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
}

export default reducer;
