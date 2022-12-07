import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class ProductPage extends BasePage {
    public header: Header = new Header();
    private cartPageLocator = '#cart_contents_container';

    private get cartListItem() {
        return $(`${this.cartPageLocator} .cart_list`).$$('.cart_item')[0];
    }

    private get cartPageCheckoutButton() {
        return $(`${this.cartPageLocator} [data-test="checkout"]`);
    }

    constructor() {
        super('Cart Page', 'cart.html');
    }

    public async checkProductIsAddedToCardPage() {
        await expect(await this.cartListItem).toBeExisting();
    }

    public async clickForCheckout() {
        await this.cartPageCheckoutButton.click();
    }
}