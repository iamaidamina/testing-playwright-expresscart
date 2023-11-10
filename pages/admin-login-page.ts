import { Locator, Page, expect } from "@playwright/test";



export class AdminLoginPage { 

   
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
        this.signInButton = page.locator('xpath=//*[@id="loginForm"]')
    }


    //methos
    async checkUrl(regExp: RegExp) {
       
        await expect(this.page).toHaveURL(regExp);
    }

    async fillLoginForm(admin) { 
        await this.emailTextField.fill(admin.email)
        await this.passwordTextField.fill(admin.password) 
        await this.signInButton.click()
    }
}

export default AdminLoginPage;