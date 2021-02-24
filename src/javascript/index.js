import '../scss/main.scss';
// Import JS modules
import * as template from './templates';
import { saveSearchToLocalStorage, fetchImages } from './otherStuff';

let state = {
  keyword:'',
  photos:[],
  page: 1,
}; 

const updateState = newState => {
  state = {...state, ...newState};
  window.dispatchEvent(new Event('statechange'));
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const keyword = this.search.value;
  // Save search to LocalStorage
  saveSearchToLocalStorage(keyword);
  // Fetch Images
  const photos = await fetchImages(keyword);
  updateState({keyword,photos, page: 1});
}

async function handlePrevNext(prevOrNext) {
  if (prevOrNext === 'prev' && state.page === 1) return;
  
  if (prevOrNext === 'next') state.page += 1;
  if (prevOrNext === 'prev') state.page -= 1;

  const photos = await fetchImages(state.keyword, state.page);
  updateState({photos});
}

const baseLayout = `
  ${template.navTemplate('Gallery')}
  ${template.searchFormTemplate()}
  ${template.footerTemplate('https://github.com/Nattzor/GalleryAPN')}
`;
// Append heading node to the DOM
const app = document.querySelector('#root');
app.innerHTML = baseLayout;

document.querySelector('#search_form').addEventListener('submit', handleFormSubmit);
document.querySelector('#prevBtn').addEventListener('click', () => handlePrevNext('prev'));
document.querySelector('#nextBtn').addEventListener('click', () => handlePrevNext('next'));

window.addEventListener('statechange', () => {
  if (state.photos.length > 0) {
    const html = state.photos.map(photo => template.imgCardTemplate(photo)).join('');
    document.querySelector('.search-results').innerHTML = html;
    document.querySelector('#prevNextBtns').classList.remove('hidden');
  } else {
    const p = `<p>Sorry! No images found!</p>`
    document.querySelector('.search-results').innerHTML = p;
  }
});
