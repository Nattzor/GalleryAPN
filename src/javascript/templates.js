export function navTemplate(title) {
    return `
    <nav><h1>${title}</h1></nav>
    `;
}

export function footerTemplate(link) {
    return `
    <footer><a href="${link}" target=”_blank”>Github</a></footer>
    `;
}

export function searchFormTemplate() {
    return `
    <section>
        <form id="search_form">
            <input type="text" name="search"></input>
            <button type="submit">Get images</button>
        </form>
        <div class="search-results">
        </div>
        <div class="hidden" id="prevNextBtns">
            <button class="round" id="prevBtn">Prev</button>
            <button class="round" id="nextBtn">Next</button>
        </div>
    </section>
    `;
}

export function imgCardTemplate(imgObject) {
    return `
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${imgObject.imageUrl}" alt="${imgObject.altDesc}" style="width:300px;height:300px;">
      </div>
      <div class="flip-card-back">
        <p>${imgObject.desc || imgObject.altDesc}</p>
      </div>
    </div>
  </div>`;
}
