import React, { useState } from 'react';
import useGetPhoto from '../util/useGetPhoto';
import styled, { css } from 'styled-components';
import { media } from '../util/styled/media';
import Photo from './photo/Photo';


const Landing = () => {
    // Page state
    const [ albumId, setAlbumId ] = useState(99);
    // data state
    const { loading, error, photos, hasMore} = useGetPhoto(albumId);
    const handleLoadMore = () => {
        setAlbumId((prev) => prev + 1);
    }
    
    return (
        <Wrapper>
            <ProductListWrap>
                { photos.length > 0 && photos.map(photo => {
                    return <Photo key={photo.id} product={photo}/>
                })}
            </ProductListWrap>
            <BtnWrap showBtn={hasMore}>
                {hasMore ?
                    <button onClick={handleLoadMore}>Show more</button> :
                    <h3>End of results</h3>
                }
            </BtnWrap>
        </Wrapper>
    )
}
const Wrapper = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    
    ${media.tablat_S} {
        margin-top: 10px;
        flex-direction: column;
        align-items: center;
    }
`
const ProductListWrap = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    ${media.tablat_S} {
        width: 100%;
        align-items: center;
    }
`

const BtnWrap = styled.div`
    width: 90%;
    height: 85px;
    margin-bottom: 30px;
    border-bottom: solid 1px ${props => props.theme.lightGray};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    ${props => !props.showBtn && css`
        background-color: ${props => props.theme.primWhite};
        border-bottom: solid 1px ${props => props.theme.primWhite};
    `}
    button {
        border: none;
        outline: none;
        font-size: 1.1rem;
        padding: 1rem 2.5rem;
        cursor: pointer;
        color: ${props => props.theme.primWhite};
        background-color: ${props => props.theme.interactive};
        transition: 0.2s;
        &:hover {
            background-color: ${props => props.theme.interactiveDark};
        }
    }
    h3 {
        color: ${props => props.theme.darkGray};
        font-weight: 400;
    }
`
export default Landing;