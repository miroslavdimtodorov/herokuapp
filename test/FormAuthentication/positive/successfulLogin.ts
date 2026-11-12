import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/loginPage';

// Valid credentials come from .env (see .env.example), with the public ones as fallback
const username = process.env.LOGIN_USERNAME || 'tomsmith';
const password = process.env.LOGIN_PASSWORD || 'SuperSecretPassword!';

describe('Login page', () => {

    it('should successfully login with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login(username, password);

        await expect(browser).toHaveUrl('/secure', { containing: true });
        await expect(loginPage.flashMessage).toHaveText(
            expect.stringContaining('You logged into a secure area!'));
    });
});
