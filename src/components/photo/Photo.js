import React ,{ useContext }from 'react';
import { CartContext } from '../../util/CartContext';
import styled from 'styled-components';
import { media } from '../../util/styled/media';
import { addToCart } from '../../actions/cartAction';

const Photo = ({product: { id, price, title, thumbnailUrl }}) => {
    // Cart context
    const { state, dispatch } = useContext(CartContext);

    const handleAddToCart = () => {
        const product = { id, price, title, thumbnailUrl}
        addToCart(product, dispatch);
    }

    return (
        <Wrap>
            <ImageWrap >
                 <img src={thumbnailUrl} alt={title}/>
            </ImageWrap>
            <ContentWrap>
                <h3>{title}</h3>
                <h4>${price}</h4>
                <AddToCart onClick={handleAddToCart}>Add to Cart</AddToCart>
            </ContentWrap>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 225.8px;
    min-height: 425.8px;
    display: flex;
    margin-top: 30px;
    margin-right: 1.5%;
    flex-direction: column;
    border: solid 1px red;
    ${media.tablat_S} {
        margin-top: 40px;
    }
`
const ImageWrap = styled.div`
    width: 100%;
    height: 225.8px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ContentWrap = styled.div`
    width: 100%;
    margin-top: 8px;
    flex-grow: 1;
    padding: 5px;
    display: flex;
    flex-direction: column;
    border:solid 3px pink;
    h3 {
        font-size: 1.3rem;
        color: ${props => props.theme.darkGray};
        margin-bottom: 10px;
    }
    h4 {
        font-size: 1.2rem;
        color: ${props => props.theme.lightBlue};
        margin-bottom: 10px;
    }
`
const AddToCart = styled.button`
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    margin-top: auto;
    border: none;
    outline: none;
    font-size: 1.1rem;
    padding: 10px;
    cursor: pointer;
    color: ${props => props.theme.primWhite};
    background-color: ${props => props.theme.interactive};
    transition: 0.2s;
    &:hover {
        background-color: ${props => props.theme.interactiveDark};
    }
`

export default Photo;