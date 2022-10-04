import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class InventoryPage extends BasePage {

    public header: Header = new Header();

    constructor() {
        super('Inventory Page', 'inventory.html');
    }
}