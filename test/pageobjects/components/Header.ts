export default class Header {

    private readonly headerContainerLocator = '#header_container';
    private readonly burgerButton = $(`${this.headerContainerLocator} [class="bm-burger-button"]`);
    private readonly burgerMenuLogOutButton = $(`${this.headerContainerLocator} [id="logout_sidebar_link"]`);

    public async clickOnSlideMenu(): Promise<void> {
        await (await this.burgerButton).click();
    }

    public async clickOnLogOutInSlideMenu(): Promise<void> {
        await (await this.burgerMenuLogOutButton).click();
    }
}