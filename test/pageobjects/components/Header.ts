export default class Header {

    private readonly headerContainerLocator = '#header_container';

    private get burgerButton() {
        return $(`${this.headerContainerLocator} .bm-burger-button`);
    }

    private get burgerMenuLogOutButton() {
        return $(`${this.headerContainerLocator} #logout_sidebar_link`);
    }

    private get cartImage() {
        return $(`${this.headerContainerLocator} .shopping_cart_link`);
      }

    public async clickOnSlideMenu() {
        await this.burgerButton.click();
    }

    public async clickOnLogOutInSlideMenu() {
        await expect(await this.burgerMenuLogOutButton).toBeClickable();
        await this.burgerMenuLogOutButton.click();
    }

    public async clickOnCartLink() {
        await this.cartImage.click();
      }
}