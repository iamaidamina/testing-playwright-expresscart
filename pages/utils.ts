import { Locator, Page, expect } from "@playwright/test";

/*
Locate by CSS or XPath
await page.locator('css=button').click();
await page.locator('xpath=//button').click();

await page.locator('button').click();
await page.locator('//button').click();
*/
export class Utils { 

    //variables
    readonly page: Page;
    

    //constructor
    constructor(page: Page) {
        this.page = page;
   
    }


    //methos
    //async clickGetStarted() { 
    //    await this.getStartedButton.click();
    
    //}
    async takeScreenShot(testInfo) {
        let screenshot = await this.page.screenshot();
        await testInfo.attach('REPORT', {
        body: screenshot,
        contentType: 'image/png',
    });
    }

 
    
}

export default Utils;