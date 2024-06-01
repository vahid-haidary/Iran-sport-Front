const items = localStorage.getItem("reduxItem") !== null ? JSON.parse(localStorage.getItem("reduxItem")) : []

const initialState = {
  cart: items
}

export function cartReducer(state = initialState, action) {
  switch(action.type) {
    case "Add_Item_To_Cart":
      const newCart = [...state.cart, { item: "item" }]
      localStorage.setItem("reduxItem", JSON.stringify(newCart))
      return {
        cart: newCart
      }
    case "Remove_Item_From_Cart":
      const updatedCart = [...state.cart]
      updatedCart.pop()
      localStorage.setItem("reduxItem", JSON.stringify(updatedCart))
      return {
        cart: updatedCart
      }
    default:
      return state
  }
}



