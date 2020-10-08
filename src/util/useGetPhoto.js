import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetPhoto = (albumId) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const setPrice = (photos) => {
        const withPhotosPrice = photos.map(photo => {
            photo.price = Math.round(Math.random() * 10000) / 100;
            return photo;
        })
        return withPhotosPrice
    }
    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(res => {
            setLoading(false);
            if(res.data.length < 1) {
                setHasMore(false)
                setError('End of result.')
            } else {
                setPhotos((prev => {
                    return [...prev, ...setPrice(res.data)];
                }))
            }
            
            // let x = Math.round(Math.random() * 10000) / 100
            // console.log(x)
            
        })
        .catch(err => {
            if(err) setError(err)
        })
    },[albumId])

    return { loading, error, photos, hasMore }
}

export default useGetPhoto;