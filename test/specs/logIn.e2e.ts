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

    it('Login with \'problem\' user', async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();

        await loginPage.open();
        await expect(await browser.getUrl()).toContain(await loginPage.getPageUrl());
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Problem));
        await expect(await browser.getUrl()).toContain(await inventoryPage.getPageUrl());
    });

    it('Login with \'locked\' user', async () => {
        const loginPage = new LoginPage();

        await loginPage.open();
        await expect(await browser.getUrl()).toContain(await loginPage.getPageUrl());
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.LocKed));
        await expect(await loginPage.getErrorMessage()).toContain('Epic sadface: Sorry, this user has been locked out.');
    });

    it('Login with \'standard\' user and log out of the account to check that the fields are empty', async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();

        await loginPage.open();
        await expect(await browser.getUrl()).toContain(await loginPage.getPageUrl());
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await inventoryPage.header.clickOnSlideMenu();
        await inventoryPage.header.clickOnLogOutInSlideMenu();
        await expect(await browser.getUrl()).toContain(await loginPage.getPageUrl());
        await expect(await loginPage.inputEmailField).toHaveValue('');
        await expect(await loginPage.inputPasswordField).toHaveValue('');
    });

    it('Login using cookies with \'standard\' user and log out of the account to check that the fields are empty', async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();

        await loginPage.apiLogInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await inventoryPage.open();
        await expect(await browser.getUrl()).toContain(await inventoryPage.getPageUrl());
        await inventoryPage.header.clickOnSlideMenu();
        await inventoryPage.header.clickOnLogOutInSlideMenu();
        await expect(await browser.getUrl()).toContain(await loginPage.getPageUrl());
        await expect(await loginPage.inputEmailField).toHaveValue('');
        await expect(await loginPage.inputPasswordField).toHaveValue('');
    });
});