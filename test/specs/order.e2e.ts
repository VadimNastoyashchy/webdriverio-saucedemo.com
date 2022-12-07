import { AccountType } from '../pageobjects/AccountType';
import Credentials from '../pageobjects/Credentials';
import CheckoutComplete from '../pageobjects/pages/CheckoutComplete';
import CheckoutPageStepOne from '../pageobjects/pages/CheckoutPageStepOne';
import CheckoutPageStepTwo from '../pageobjects/pages/CheckoutPageStepTwo';
import InventoryPage from '../pageobjects/pages/InventoryPage';
import LoginPage from '../pageobjects/pages/LoginPage';
import ProductPage from '../pageobjects/pages/ProductPage';

describe('Product order verification tests', () => {
    it('Product order (positive flow)', async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        const productPage = new ProductPage();
        const checkoutPageStepOne = new CheckoutPageStepOne();
        const checkoutPageStepTwo = new CheckoutPageStepTwo();
        const checkoutComplete = new CheckoutComplete();
        const client = {
            firstName: 'Vadym',
            lastName: 'Nastoiashchyi',
            postalCode: '22000'
        };

        await loginPage.apiLogInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await inventoryPage.open();
        await expect(await browser.getUrl()).toContain(await inventoryPage.getPageUrl());
        await inventoryPage.addFirstProductToCart();
        await inventoryPage.header.clickOnCartLink();
        await productPage.checkProductIsAddedToCardPage();
        await productPage.clickForCheckout();
        await checkoutPageStepOne.fillClientInformationAndClickOnContinueButton(client);
        await checkoutPageStepTwo.clickOnFinishButtonAndCompleteTheOrder();
        await checkoutComplete.checkCompleteText();
    });

    // it('Checking for error messages when entering information about the customer', () => {
    //     cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
    //     inventoryPage
    //         .visit()
    //         .checkPageUrl()
    //         .addFirstProductToCart()
    //         .header.clickCartLink()
    //         .clickForCheckout()
    //         .clickOnContinueButton()
    //         .checkingErrorMessage('Error: First Name is required')
    //         .inputFirstName('Oleh')
    //         .checkingErrorMessage('Error: Last Name is required')
    //         .inputLastName('Babenko')
    //         .checkingErrorMessage('Error: Postal Code is required')
    //         .inputPostalCode('22000');
    // });

    // it('Сheck that the product is added and removed from the basket', () => {
    //     cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
    //     inventoryPage
    //         .visit()
    //         .checkPageUrl()
    //         .clickOnRandomProduct()
    //         .checkProductFields()
    //         .addProductToCart()
    //         .header.checkThatCardHasProducts();
    //         inventoryItemPage.removeProductFromCard()
    //         .header.checkThatCardNotHaveProducts()
    //         .clickOnBackToProductButton()
    //         .checkPageUrl();
    // });

    // it('Check that all products have a title, description, price and a button to add to the card', () => {
    //     cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
    //     inventoryPage
    //         .visit()
    //         .checkPageUrl()
    //         .checkProductsField();
    // });
});