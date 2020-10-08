import React, { useContext } from 'react';
import { CartContext } from '../util/CartContext';
import styled from 'styled-components';
import { media } from '../util/styled/media';
import SingleCart from './cart/SingleCart';
import CheckOut from './cart/CheckOut';

const Cart = () => {
    const {state, dispatch} = useContext(CartContext);
    const { cart, coupons } = state;
    return (
        <Wrapper>
            {!cart || cart.length === 0 ? <NoProductMsg>No products...</NoProductMsg> :
                <>
                    <ProductsSection>
                            {cart.map(item => <SingleCart key={item.id} cart={item} />)}
                    </ProductsSection>
                    <CheckOut cart={cart}/>
                </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.main`
    width: 100%;
    min-height: 80%;
    padding: 30px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.primWhite};
`

const ProductsSection = styled.section`
    width: 80%;
    ${media.tablat_S} {
        width: 100%;
    }
`

const NoProductMsg = styled.h1`
    color: ${props => props.theme.brandBlue};
    margin: auto;
`

export default Cart;