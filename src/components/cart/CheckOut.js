import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../util/CartContext';
import { matchCoupon, clearCart } from '../../actions/cartAction';
import { media } from '../../util/styled/media';
import axios from 'axios';


const CheckOut = ({ cart }) => {
    const {state, dispatch} = useContext(CartContext);
    const [info, setInfo] = useState('');
    const getTotal = () => {
        let total = cart.reduce((acc, item) => {
            return acc + item.quantity * item.price;
        }, 0);
        if(state.coupon){
            return Math.round(total * 100 * 0.9) / 100;
        }
        return Math.round(total * 100) / 100;
    }

    const handleCoupon = (e) => {
        matchCoupon(e.target.value, dispatch)
    }
    const handleSetInfo = (e) => {
        setInfo(e.target.value);
    }
    const buy = async () => {
        const config = {
            headers: { "Content-Type": "Application/json"}
        }
        const body = {
            price: getTotal(),
            deliveryInfo: info
        }
        try {
            await axios.post('/api/pay', body, config);
            alert('Thank you for your purchase.');
            clearCart(dispatch);
        } catch(err) {
            alert('Thank you for your purchase.');
            clearCart(dispatch);
            console.log('Fake API',err);
        }
    }
    return (
        <Wrap>
            <Total>Total: ${getTotal()}</Total>
            
            <>  
                <CouponWrap matched={state.coupon}>
                    <label htmlFor="coupon">Coupon Code(10% off)</label>
                    <input type="text" id="coupon" onChange={handleCoupon} placeholder="Try 'AAAA' or 'BBBB'"/>
                    {state.error && <h5>{state.error}</h5>}
                </CouponWrap>
                <AddressWrap>
                    <h3>Delivery Information: </h3>
                    <textarea 
                    rows="2" 
                    placeholder="For Delivery"
                    onChange={handleSetInfo}
                    required
                    ></textarea>
                </AddressWrap>
            </>
            <CheckoutBtn onClick={buy}>Pay</CheckoutBtn>
        </Wrap>
    )
}


const Wrap = styled.div`
    width: 80%;
    background-color: white;
    padding: 10px;
    ${media.tablat_S} {
        width: 100%;
    }
`

const Total = styled.div`
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    margin-bottom: 10px;
    color: ${props => props.theme.brandBlue};
`

const CouponWrap = styled.div`
    width: 30%;
    margin-bottom: 10px;
    
    h3 {
        font-weight: 400;
    }
    input {
        width: 100%;
        padding: 6px;
        font-size: 0.9rem;
        color: ${props => props.matched? props.theme.success : props.theme.error};
    }
    h5 {
        font-weight: 400;
        color: ${props => props.theme.error}
    }
`

const AddressWrap = styled.div`
    width: 100%;
    margin-bottom: 10px;
    h3 {
        font-weight: 400;
    }
    textarea {
        width: 100%;
        padding: 6px;
        font-size: 0.9rem;
    }
`

const CheckoutBtn = styled.button`
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    display: inline-block;
    border: none;
    outline: none;
    font-size: 1.1rem;
    width: 100%;
    height: 45px;
    cursor: pointer;
    color: ${props => props.theme.primWhite};
    background-color: ${props => props.theme.interactive};
    transition: 0.2s;
    &:hover {
        background-color: ${props => props.theme.interactiveDark};
    }
`


export default CheckOut;