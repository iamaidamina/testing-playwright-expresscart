import { Locator, Page, expect } from "@playwright/test";


export class CustomerLoginPage { 

    //variables
    readonly page: Page;
    readonly emailTextField: Locator
    readonly passwordTextField: Locator
    readonly signInButton:Locator

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.emailTextField = page.locator('xpath=//*[@id="email"]')
        this.passwordTextField = page.locator('xpath=//*[@id="password"]')
        this.signInButton = page.locator('xpath=//*[@id="customerloginForm"]')
    }


    //methos
    async checkUrl(regExp: RegExp) {
       
        await expect(this.page).toHaveURL(regExp);
    }

    async fillLoginForm(customer) { 
        await this.emailTextField.fill(customer.email)
        await this.passwordTextField.fill(customer.password) 
        await this.signInButton.click()
    }
}

export default CustomerLoginPage;