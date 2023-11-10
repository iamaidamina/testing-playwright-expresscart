import { Locator, Page, expect } from "@playwright/test";

export class SearchReviewsPage { 

    //variables
    readonly page: Page;
    readonly searchBar: Locator
    readonly filterButton: Locator
    readonly cancelButton: Locator


    //constructor
    constructor(page: Page) {
        this.page = page;
        this.cancelButton = page.locator('xpath=//*[@class="hidden-xs btn btn-outline-warning"]');
        this.searchBar = page.locator('xpath=//*[@id="review_filter"]');
        this.filterButton = page.locator('xpath=//*[@id="btn_review_filter"]');
        
   
    }

    //methos

    async fillSearchBar(keyWord) { 
        await this.cancelButton.click()
        await this.searchBar.fill(keyWord);
    }

    async applyFilter() { 
   
        await this.filterButton.click()
        
    }

    async checkSearchResult(keyWord)
    {
        let value= true
        for (let i:number = 2; i<=8; i+=3) {
            let valueFinded = await this.page.locator(`xpath=(//*[@class="top-pad-8 text-truncate"])[${i}]`).textContent()
            value = valueFinded == keyWord
            if (!value) {
                break
            }
  
        }
        expect(value).toBeTruthy();
   
    }

  

    
    
}

export default SearchReviewsPage;