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
    <section><form id="search_form">
        <input type="text" name="search"></input>
        <button type="submit">Get images</button>
    </form></section>
    `;
}

export function buttonTemplate() {
    return `
    <section>
        <button class="round">Prev</button>
        <button class="round">Next</button>
    </section>
    `;
}


