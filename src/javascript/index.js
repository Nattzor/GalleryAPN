import '../scss/main.scss'
// Import JS modules
import * as template from './templates';
import { handleFormSubmit } from './otherStuff';

const onloadHtml = `
  ${template.navTemplate('Gallery')}
  ${template.searchFormTemplate()}
  ${template.footerTemplate('https://github.com/Nattzor/GalleryAPN')}
`;
// Append heading node to the DOM
const app = document.querySelector('#root');
app.innerHTML = onloadHtml;

document.querySelector('#search_form').addEventListener('submit', handleFormSubmit);
