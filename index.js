import * as GLOBALS from './app/core/globals.js';
import { Router } from './app/core/router.js';
import * as layout from './app/components/layout.js';
import { routes } from './app/core/router.js';



(async () => {
    const app = document.getElementById('app');
    const router = new Router();

    app.innerHTML += await layout.renderHeader(GLOBALS.GLOBAL_VARS.APP_TITLE, `${GLOBALS.IMG_DIR}logo-secondary.png`);
    app.innerHTML += await layout.renderNavigation(routes);

    await router.start();

    app.innerHTML += await layout.renderFooter(GLOBALS.GLOBAL_VARS.APP_TITLE, new Date().getFullYear());
})();

