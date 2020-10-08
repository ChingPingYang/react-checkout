export const addToCart = ( product, dispatch) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart === null) {
        cart = [{...product, quantity: 1}];
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch({type: "ADD-PRODUCT", payload: cart});
    } else {
        const index = cart.map(p => p.id).indexOf(product.id);
        
        // If the product is not in the cart, index will be -1
        if(index >= 0 ) {
            cart[index].quantity++;
            localStorage.setItem('cart',JSON.stringify(cart));
            dispatch({type: "ADD-PRODUCT", payload: cart});
        } else {
            cart.push({...product, quantity: 1});
            localStorage.setItem('cart', JSON.stringify(cart));
            dispatch({ type: "ADD-PRODUCT", payload: cart});
        }
    }
}

export const plusQuantity = (id, dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.map(item => item.id === id && item.quantity++);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({ type: "PLUS_QUANTITY", payload: cart});
}

export const minusQuantity = (id, dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.map(item => item.id === id && item.quantity > 1 && item.quantity--);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({ type: "MINUS_QUANTITY", payload: cart});
}

export const removeCart = (id, dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({ type: "REMOVE_CART", payload: newCart});
}

export const matchCoupon = (coupon, dispatch) => {
    const coupons = ["AAAA", "BBBB"];
    let matched = false
    coupons.forEach(c => c === coupon && (matched = true));
    if(matched){
        dispatch({ type: "VALID-COUPON"})
    } else {
        dispatch({ type: "INVALID-COUPON"})
    }
}

export const clearCart = (dispatch) => {
    dispatch({ type: "CLEAR-CART"})
}