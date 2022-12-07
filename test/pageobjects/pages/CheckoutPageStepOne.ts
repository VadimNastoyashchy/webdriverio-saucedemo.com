import BasePage from '../base/BasePage';
import IClientInformation from '../IClientInformation';

export default class CheckoutPageStepOne extends BasePage {

    private get inputFirstNameField() {
        return $('[data-test="firstName"]');
    }

    private get inputSecondNameField() {
        return $('[data-test="lastName"]');
    }

    private get inputCodeField() {
        return $('[data-test="postalCode"]');
    }

    private get continueButton() {
        return $('[data-test="continue"]');
    }

    constructor() {
        super('Checkout Page', 'checkout-step-one.html');
    }

    private async enterFirstName(firstName: string) {
        await (await this.inputFirstNameField).setValue(firstName);
    }

    private async enterLastName(secondName: string) {
        await (await this.inputSecondNameField).setValue(secondName);
    }

    private async enterPostalCode(postalCode: string) {
        await (await this.inputCodeField).setValue(postalCode);
    }

    public async clickOnContinueButton() {
        await this.continueButton.click();
    }

    public async fillClientInformationAndClickOnContinueButton({ firstName, lastName, postalCode }: IClientInformation) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
        await this.clickOnContinueButton();
    }
}