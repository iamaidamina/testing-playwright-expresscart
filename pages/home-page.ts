import { Locator, Page, expect } from "@playwright/test";

/*
Locate by CSS or XPath
await page.locator('css=button').click();
await page.locator('xpath=//button').click();

await page.locator('button').click();
await page.locator('//button').click();
*/
export class HomePage { 

    //variables
    readonly page: Page;
    //readonly getStartedButton: Locator
    readonly customerLoginButton: Locator

     xpathProduct: string

    //constructor
    constructor(page: Page) {
        this.page = page;
        //this.getStartedButton = page.getByRole('link', { name: 'Get started' })
        this.customerLoginButton = page.locator('xpath=//*[@href="/customer/account"]');
        this.xpathProduct = 'xpath=//*[@href="/product/';
    }


    //methos
    //async clickGetStarted() { 
    //    await this.getStartedButton.click();
    
    //}
    async checkUrl() {
        let url:string = 'http://127.0.0.1:1111/'
        //await expect(this.page).toHaveURL(/.*intro/);
       //  /.*/customer/login/
        await expect(this.page).toHaveURL(url);
    }

    async clickCustomerLoginButton() { 
        await this.customerLoginButton.click();
    }

    async pickProduct(product) {
        this.xpathProduct += product.name + '"]';
        await this.page.locator(this.xpathProduct).click();
        //await this.customerLoginButton.click();
    }


    
    
}

export default HomePage;