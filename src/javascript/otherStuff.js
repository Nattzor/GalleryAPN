import { createApi } from 'unsplash-js';

export function saveSearchToLocalStorage(searchTerm) {
    let savedSearchesArray = JSON.parse(window.localStorage.getItem('savedSearches'));
    savedSearchesArray ? savedSearchesArray.push(searchTerm) : savedSearchesArray = [searchTerm];
    window.localStorage.setItem('savedSearches', JSON.stringify(savedSearchesArray));
}

export const fetchImages = async (keyword = 'cats', page = 1) => {
    const accessKey = 'lyEw-RLUmA-7SQhKVJWXnDZTmzPrB1M9eCD53vZV2IY';
    const api = createApi({
        // Don't forget to set your access token here!
        // See https://unsplash.com/developers
        accessKey: accessKey
    });

    const data = await api.search.getPhotos({ 
        query: keyword, orientation: "landscape", page: page 
    }).catch(err => console.error(err));
    
    const totalPages = data.response.total_pages;
    const photos = data.response.results;
    return photos.map(photo => {
        return {
            imageUrl: photo.urls.small,
            desc: photo.description,
            altDesc: photo.alt_description
        }
    });
}
