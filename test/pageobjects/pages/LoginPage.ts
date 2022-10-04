import BasePage from '../base/BasePage';
import ICredentials from '../ICredentials';

export default class LoginPage extends BasePage {

    public readonly inputEmailField = $('[data-test="username"]');
    public readonly inputPasswordField = $('[data-test="password"]');
    private readonly logInButton = $('[data-test="login-button"]');
    private readonly errorText = $('.error-message-container');

    constructor() {
        super('LogIn Page');
    }

    private async enterEmail(userName: string): Promise<void> {
        await (await this.inputEmailField).setValue(userName);
    }

    private async enterPassword(userPassword: string): Promise<void> {
        await (await this.inputPasswordField).setValue(userPassword);
    }

    private async clickOnLogInButton(): Promise<void> {
        await this.logInButton.click();
    }

    public async logInWithCredentials(credentials: ICredentials): Promise<void> {
        const { userName, password } = credentials;
        await this.enterEmail(userName);
        await this.enterPassword(password);
        await this.clickOnLogInButton();
    }

    // public async getErrorMessage(): Promise<string> {
    //     return await this.errorText.innerText();
    // }
}