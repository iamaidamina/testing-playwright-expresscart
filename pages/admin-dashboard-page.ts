import { Locator, Page, expect } from "@playwright/test";



export class AdminDashboardPage { 

   
    //variables
    readonly page: Page;
    readonly customerOption: Locator;
    readonly reviewOption: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.customerOption = page.locator('xpath=//*[@href="/admin/customers"]')
        this.reviewOption = page.locator('xpath=//*[@href="/admin/reviews"]')

    }


    //methos
    async checkUrl(regExp: RegExp) {
       
        await expect(this.page).toHaveURL(regExp);
    }

    async goToCustomerModule() { 

        this.customerOption.click()
      
    }

    async goToReviewModule() { 

        this.reviewOption.click()
      
    }
}

export default AdminDashboardPage;