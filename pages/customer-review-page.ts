import { Locator, Page } from "@playwright/test";


export class CustomerReviewPage { 

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

export default CustomerReviewPage;