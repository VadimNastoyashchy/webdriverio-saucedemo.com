import BasePage from '../base/BasePage';
import ICredentials from '../ICredentials';

export default class LoginPage extends BasePage {

    public get inputEmailField() {
        return $('[data-test="username"]');
    }

    public get inputPasswordField() {
        return $('[data-test="password"]');
    }

    private get logInButton() {
        return $('[data-test="login-button"]');
    }

    private get errorText() {
        return $('.error-message-container');
    }

    constructor() {
        super('LogIn Page');
    }

    private async enterEmail(userName: string) {
        await this.inputEmailField.setValue(userName);
    }

    private async enterPassword(userPassword: string) {
        await this.inputPasswordField.setValue(userPassword);
    }

    private async clickOnLogInButton() {
        await this.logInButton.click();
    }

    public async logInWithCredentials(credentials: ICredentials) {
        const { userName, password } = credentials;
        await this.enterEmail(userName);
        await this.enterPassword(password);
        await this.clickOnLogInButton();
    }

    public async apiLogInWithCredentials(credentials: ICredentials) {
        this.open();
        const { userName } = credentials;
        const date = new Date().getTime() + 10 * 60 * 1000;

        await browser.setCookies({
            domain: 'www.saucedemo.com',
            expiry: date,
            httpOnly: false,
            name: 'session-username',
            path: '/',
            secure: false,
            value: userName
        });
    }

    public async getErrorMessage() {
        return await this.errorText.getText();
    }
}