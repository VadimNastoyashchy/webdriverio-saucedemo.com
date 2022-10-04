import { AccountType } from '../pageobjects/AccountType';
import Credentials from '../pageobjects/Credentials';
import InventoryPage from '../pageobjects/pages/InventoryPage';
import LoginPage from '../pageobjects/pages/LoginPage';

describe('My Login application', () => {
    it('Login with \'standard\' user', async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();

        await loginPage.open();
        await expect(await browser.getUrl()).toContain(await loginPage.getPageUrl());
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await expect(await browser.getUrl()).toContain(await inventoryPage.getPageUrl());
    });
});