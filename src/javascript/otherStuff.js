import { createApi } from 'unsplash-js';

export const handleFormSubmit = event => {
    event.preventDefault();
    fetchImages();
}

export const fetchImages = async (keyword = 'cat', page = 1) => {
    const accessKey = 'lyEw-RLUmA-7SQhKVJWXnDZTmzPrB1M9eCD53vZV2IY';
    const api = createApi({
        // Don't forget to set your access token here!
        // See https://unsplash.com/developers
        accessKey: accessKey
    });

    const photos = await api.search.getPhotos({ 
        query: keyword, orientation: "landscape", page: page 
    }).catch(err => console.error(err));

    console.log(photos.response);
}