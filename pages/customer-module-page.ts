import { Locator, Page, expect } from "@playwright/test";



export class CustomerModulePage { 

   
    //variables
    readonly page: Page;
    

    //constructor
    constructor(page: Page) {
        this.page = page;

    }


    //methos
    async pickCustomer(customer) {
       
        await this.page.locator(`xpath=//div[contains(text(),"${customer.name}")]`).click()
    }

 
}

export default CustomerModulePage;