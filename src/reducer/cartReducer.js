export const init = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    coupons: false,
    error: null
}

export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case "ADD-PRODUCT":
        case "MINUS_QUANTITY":
        case "PLUS_QUANTITY":
        case "REMOVE_CART":
            return {
                ...state,
                cart: payload
            };
        
        default:
            return state;
    }
}