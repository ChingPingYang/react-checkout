export const init = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    coupons: false,
    error: null
}

export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case "ADD-PRODUCT":
            return {
                ...state,
                cart: payload
            };
        default:
            return state;
    }
}