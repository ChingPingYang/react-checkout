export const init = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    coupon: false,
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
        case "VALID-COUPON":
            return {
                ...state,
                coupon: true,
                error: null
            }
        case "INVALID-COUPON":
            return {
                ...state,
                coupon: false,
                error: "Invalid coupon"
            }
        case "CLEAR-CART":
            localStorage.removeItem('cart');
            return {
                cart: [],
                coupon: false,
                error: null
            }
        default:
            return state;
    }
}