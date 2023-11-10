import { Locator, Page, expect } from "@playwright/test";



export class UserModulePage { 

   
    //variables
    readonly page: Page;
    value: Boolean;
    

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.value = false

    }


    //methos
    async pickUser(user) {
        let j: number = 1;
        
        for (let i: number = 14; i <= 17; i++) {
            let valueFinded = String(await this.page.locator(`xpath=(//li)[${i}]`).textContent())
            this.value = valueFinded.includes(user.name)
            if (this.value) {
                console.log(valueFinded)
                this.page.on('dialog', dialog => dialog.accept());//Handle Alert to confirm delete
                await this.page.locator(`xpath=(//*[@class="userDelete text-danger"])[${j}]`).click()//pick selected user
                break
            }
            j++
        }
    }

    async checkResult() {
        if (this.value == true) {
            expect(this.value).toBeTruthy();
        } else { 
            expect(this.value).toBeFalsy();
        }
        
         
    }
        
    

 
}

export default UserModulePage;