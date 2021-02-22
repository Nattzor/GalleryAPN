import { createApi } from 'unsplash-js'; 

export async function handleFormSubmit (event) {
    event.preventDefault();
    const keyword = this.search.value;
    // Save search to LocalStorage
    saveSearchToLocalStorage(keyword);
    // Fetch Images
    // const photos = await fetchImages(keyword);
    // console.log(photos);
}

function saveSearchToLocalStorage(searchTerm) {
    let savedSearchesArray = JSON.parse(window.localStorage.getItem('savedSearches'));
    savedSearchesArray ? savedSearchesArray.push(searchTerm) : savedSearchesArray = [searchTerm];
    window.localStorage.setItem('savedSearches', JSON.stringify(savedSearchesArray));
}


const fetchImages = async (keyword = 'cats', page = 1) => {
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
    return photos;
}