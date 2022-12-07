import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class InventoryPage extends BasePage {

    private readonly inventoryContainer = '#inventory_container';
    public header: Header = new Header();

    private get inventoryItems() {
        return $$(`${this.inventoryContainer} .inventory_item`);
    }

    constructor() {
        super('Inventory Page', 'inventory.html');
    }

    public async addFirstProductToCart() {
        await (await this.inventoryItems[0].$('button')).click();
    }
}