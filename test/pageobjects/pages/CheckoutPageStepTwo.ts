import BasePage from '../base/BasePage';

export default class CheckoutPageStepTwo extends BasePage {

    private get finishButton() {
        return $('[data-test="finish"]');
    }

    constructor() {
        super('Checkout Page two', 'checkout-step-two.html');
    }

    public async clickOnFinishButtonAndCompleteTheOrder() {
        await this.finishButton.click();
    }
}