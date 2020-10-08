import React ,{ useContext }from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled ,{ css }from 'styled-components';
import { media } from '../../util/styled/media';
import { CartContext } from '../../util/CartContext';

const Navbar = ({location}) => {
    const {state, dispatch} = useContext(CartContext);
    
    return (
        <NavWrap>
            <ListWrap>
                <li>
                    <StyledLink 
                        to={"/"} 
                        location={location.pathname}
                        path={"/"} >
                        PRODUCTS
                    </StyledLink>
                </li>
                <li>
                    <Link to="/cart">
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H3.82051L6.07692 13H21.8718L23 4.42857H7.5" stroke={location.pathname === "/cart" ? "#0028FF" : "#676F79"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.5 16H6.5C5.67157 16 5 15.3284 5 14.5V14.5C5 13.6716 5.67157 13 6.5 13V13" stroke={location.pathname === "/cart" ? "#0028FF" : "#676F79"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="8" cy="18" r="2" stroke={location.pathname === "/cart" ? "#0028FF" : "#676F79"} strokeWidth="1.5"/>
                            <circle cx="20" cy="18" r="2" stroke={location.pathname === "/cart" ? "#0028FF" : "#676F79"} strokeWidth="1.5"/>
                        </svg>
                        {state.cart !== null && <div><h5>{state.cart.length}</h5></div>}
                    </Link>
                </li>
            </ListWrap>
        </NavWrap>
    )
}

const NavWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 30px -15px rgba( 1, 1, 1, 0.3);
`
const ListWrap = styled.ul`
    height: 100%;
    flex-grow: 1;
    margin-right: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    ${media.tablat_S} {
        margin-right: 20px;
        ${media.mobile} {
            justify-content: center;
            margin-right: 0px;
        }
    }
    li {
        position: relative;
        list-style: none;
        flex: 0 0 10px;
        margin-left: 40px;
        ${media.mobile} {
            margin: 0px 10px;
        }
            svg {
                width: 30px;
                height: 30px;
                margin-top: 3px;
                cursor: pointer;
                circle {
                    transition: 0.3s;
                }
                path {
                    transition: 0.3s;
                }
                &:hover {
                    circle {
                        stroke: ${props => props.theme.brandBlue};
                    }
                    path {
                        stroke: ${props => props.theme.brandBlue};
                    }
                }
            }
            div {
                position: absolute;
                top: -3px;
                left: 16px;
                width: 20px;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${props => props.theme.interactive};
                border-radius: 100%;
                h5 {
                    color: white;
                    font-weight: 400;
                }
            }
    }
    
`
const StyledLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.darkGray};
    text-align: center;
    position: relative;
    transition: 0.3s;
    &:after {
        content: "";
        position: absolute;
        left: 0px;
        top: 20px;
        width: 100%;
        height: 2.3px;
        transform: scale(0);
        background-color: ${props => props.theme.brandBlue};
        transition: 0.3s ease-in-out;
        opacity: 0;
    }
    &:hover {
        ${ props => props.location !== props.path && css`
            color: ${props => props.theme.brandBlue};
        `}
        &:after{
            transform: scale(1);
            opacity: 1;
        }
    }
    /* check if the path is current path */
    ${props => props.location === props.path && css`
        color: ${props => props.theme.brandBlue};
        &:after{
                transform: scale(1);
                opacity: 1;
            }
    `} 
`

export default withRouter(Navbar);