import { Locator, Page, expect } from "@playwright/test";

export class CustomerUpdatePage { 

   
    //variables
    readonly page: Page;
    readonly emailTextField: Locator;
    readonly firstNameTextField: Locator;
    readonly lastNameTextField: Locator;
    readonly address1TextField: Locator;
    readonly countrySelect: Locator;
    readonly stateTextField: Locator;
    readonly postcodeTextField: Locator;
    readonly phoneNumberTextField: Locator;
    readonly passwordTextField: Locator;
    readonly saveCustomerButton: Locator;
    readonly confirmMessage: Locator;
    ////*[@id="notify_message"]

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.emailTextField = page.locator('xpath=//*[@id="email"]');
        this.firstNameTextField = page.locator('xpath=//*[@id="firstName"]');
        this.lastNameTextField = page.locator('xpath=//*[@id="lastName"]');
        this.address1TextField = page.locator('xpath=//*[@id="address1"]');
        this.countrySelect = page.locator('xpath=//*[@id="country"]');
        this.stateTextField = page.locator('xpath=//*[@id="state"]');
        this.postcodeTextField = page.locator('xpath=//*[@id="postcode"]');
        this.phoneNumberTextField = page.locator('xpath=//*[@id="phone"]');
        this.passwordTextField = page.locator('xpath=//*[@id="password"]');
        this.saveCustomerButton = page.locator('xpath=//*[@id="updateCustomer"]');
        this.confirmMessage = page.locator('//div[contains(text(),"Customer updated")]');

    }

    //methos
    async checkTittle(title) {
        let titleGet = await this.page.locator('xpath=//h2').textContent();
        let value = titleGet == title
        expect(value).toBeTruthy();
        
    }

    async updateAllForm(customerUpdate) {

        await this.emailTextField.fill(customerUpdate.email);
        await this.firstNameTextField.fill(customerUpdate.first);
        await this.lastNameTextField.fill(customerUpdate.last);
        await this.address1TextField.fill(customerUpdate.address);
        await this.countrySelect.selectOption(customerUpdate.country)
        await this.stateTextField.fill(customerUpdate.state);
        await this.postcodeTextField.fill(customerUpdate.postcode);
        await this.phoneNumberTextField.fill(customerUpdate.phone);
        await this.passwordTextField.fill(customerUpdate.password);
        await this.saveCustomerButton.click();

    }

    async updateEmail(customerUpdate) {

        await this.emailTextField.fill(customerUpdate.email);
        await this.saveCustomerButton.click();

    }

    async updateFirst(customerUpdate) {

        await this.firstNameTextField.fill(customerUpdate.first);
        await this.saveCustomerButton.click();

    }

    async updateLast(customerUpdate) {

        await this.lastNameTextField.fill(customerUpdate.last);
        await this.saveCustomerButton.click();

    }

    async updateAddress(customerUpdate) {

        await this.address1TextField.fill(customerUpdate.address);
        await this.saveCustomerButton.click();

    }

    async updateCountry(customerUpdate) {

        await this.countrySelect.selectOption(customerUpdate.country)
        await this.saveCustomerButton.click();

    }

    async updateState(customerUpdate) {

        await this.stateTextField.fill(customerUpdate.state);
        await this.saveCustomerButton.click();

    }

    async updatePostcode(customerUpdate) {

        await this.postcodeTextField.fill(customerUpdate.postcode);
        await this.saveCustomerButton.click();

    }

    async updatePhone(customerUpdate) {

        await this.phoneNumberTextField.fill(customerUpdate.phone);
        await this.saveCustomerButton.click();

    }

    async updatePassword(customerUpdate) {

        await this.passwordTextField.fill(customerUpdate.password);
        await this.saveCustomerButton.click();

    }


    async checkConfirmMessage(message) {

        let valueMessage = await this.confirmMessage.textContent()
        let value = valueMessage == message
        //console.log("Hola: "+valueMessage)
        //let value = valueMessage == message
        expect(value).toBeTruthy();

    }


 
}

export default CustomerUpdatePage;