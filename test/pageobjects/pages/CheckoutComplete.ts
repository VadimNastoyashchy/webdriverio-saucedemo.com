import BasePage from '../base/BasePage';

export default class CheckoutComplete extends BasePage {

    private readonly checkoutCompleteLocator = '#checkout_complete_container';

    private get completeText() {
        return $(`${this.checkoutCompleteLocator} .complete-text`);
    }

    constructor() {
        super('Checkout Complete', 'checkout-complete.html');
    }

    public async checkCompleteText() {
        await expect(await (await this.completeText).getText()).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}