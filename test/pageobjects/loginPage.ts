import { $ } from '@wdio/globals'
import { ChainablePromiseElement } from 'webdriverio'
import Page from './page';

class LoginPage extends Page {

    get userNameField(): ChainablePromiseElement {
        return $('#username');
    }

    get passwordField(): ChainablePromiseElement {
        return $('#password');
    }

    get loginButton(): ChainablePromiseElement {
        return $('button[type="submit"]');
    }

    get flashMessage(): ChainablePromiseElement {
        return $('#flash');
    }

    public async login(userName: string, password: string) {
        await this.userNameField.setValue(userName);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    public open() {
        return super.open('login');
    }
}

export default new LoginPage();
