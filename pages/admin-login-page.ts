import { Locator, Page } from "@playwright/test";

/*
Locate by CSS or XPath
await page.locator('css=button').click();
await page.locator('xpath=//button').click();

await page.locator('button').click();
await page.locator('//button').click();
*/

export class AdminLoginPage { 

    //variables
    readonly page: Page;
    readonly getStartedButton: Locator

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', { name: 'Get started' })
    }


    //methos
    async clickGetStarted() { 
        await this.getStartedButton.click();
    
    }
}

export default AdminLoginPage;