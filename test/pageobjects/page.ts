import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    * @returns the browsing context of the opened page. Needed for frames:
    * `const page = await somePage.open(); const frame = await page.frame({ selector: '...' });`
    */
    public open(path: string) {
        return browser.url(`/${path}`)
    };

}
