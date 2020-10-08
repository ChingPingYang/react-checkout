import React, { useState } from 'react';
import useGetPhoto from '../util/useGetPhoto';
import styled from 'styled-components';
import { media } from '../util/styled/media';
import Photo from './photo/Photo';


const Landing = () => {
    // Page state
    const [ albumId, setAlbumId ] = useState(1);
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
            {hasMore && <button onClick={handleLoadMore}>GO</button>}
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
export default Landing;