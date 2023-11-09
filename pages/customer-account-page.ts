import { Locator, Page, expect } from "@playwright/test";


export class CustomerAccountPage { 

    //variables
    readonly page: Page;
    readonly homeLink: Locator
   

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('xpath=//*[@href="/" and text()="Home"]')

    }


    //methos
    async checkUrl(regExp: RegExp) {
       
        await expect(this.page).toHaveURL(regExp);
    }

    async goToHome() {
       
        await this.homeLink.click();
    }


}

export default CustomerAccountPage;