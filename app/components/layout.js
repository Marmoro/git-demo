export async function renderHeader(appTitle, img) {
    return `
    <header class="flex flex-align-items-center">
    <img src="${img}">
    <h1>${appTitle}</h1>
    </header>
    `;
}

async function renderNavigationLinks(routes) {
    let linksTemplate = '';
    for (const [key, value] of Object.entries(routes)) {
        if (key === '/' || key === '') {
            continue;
        }
        linksTemplate += `<a href="/${key}">${value.name}</a>`
    }
    return linksTemplate;
};

export async function renderNavigation(routes) {
    return `<nav>
    ${await renderNavigationLinks(routes)}
    </nav>`
};

export async function renderFooter(appTitle, date) {
    return `
    <footer>
        <h4>${appTitle}</h4>
        <small>${date}</small>
    </footer>
    `;
}