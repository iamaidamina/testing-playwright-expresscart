import { Locator, Page, expect } from "@playwright/test";

/*
Locate by CSS or XPath
await page.locator('css=button').click();
await page.locator('xpath=//button').click();

await page.locator('button').click();
await page.locator('//button').click();
*/
export class ProductPage { 

    //variables
    readonly page: Page;
    //readonly getStartedButton: Locator
    readonly addReviewButton: Locator
    readonly modalReviewtittle: Locator
    readonly reviewTittle: Locator
    readonly reviewDescription: Locator
    readonly reviewRating: Locator
    readonly addReview: Locator
    readonly recentReviews: Locator
    readonly ratingValue: Locator
    readonly tittleValue: Locator
    readonly descriptionValue : Locator




    //constructor
    constructor(page: Page) {
        this.page = page;
        this.addReviewButton = page.locator('xpath=//*[@id="add-review"]');
        this.modalReviewtittle = page.locator('xpath=//h5[contains(text(),"Product review")]')
        this.reviewTittle = page.locator('xpath=//*[@id="review-title"]')
        this.reviewDescription = page.locator('xpath=//*[@id="review-description"]')
        this.reviewRating = page.locator('xpath=//*[@id="review-rating"]')
        this.addReview = page.locator('xpath=//*[@id="addReview"]')
        this.recentReviews = page.locator('xpath=//*[@href="#collapseReviews"]')
        this.ratingValue = page.locator('xpath=//*[@class="list-group-item"]/p[2]')
        this.tittleValue = page.locator('xpath=//*[@class="list-group-item"]/p[3]')
        this.descriptionValue = page.locator('xpath=//*[@class="list-group-item"]/p[4]')

    }


    //methos
    async checkUrl(product) {

       let regExp: string =`http://127.0.0.1:1111/product/${product.name}`
        await expect(this.page).toHaveURL(regExp);
    }


    async clickAddReviewButton() {

         await  this.addReviewButton.click();
    }

    async checkModalReview() {
        let value = await this.modalReviewtittle.textContent() == "Product review"
        expect(value).toBeTruthy()
    }
    
    async fillReviewModal(review) {
        await this.reviewTittle.fill(review.tittle); 
        await this.reviewDescription.fill(review.description); 
        await this.reviewRating.fill(review.rating); 
        await this.addReview.click(); 
    }

    async clickRecentReviewLlink() {

        await  this.recentReviews.click();
    }

    async scrollDownUntilViewReview() {

        for (var counter:number = 1; counter<=36; counter++) {
            await this.page.keyboard.press('End');
        }

    }

    async checkReviewCreation(review) {

        
        let valueRating = await this.ratingValue.textContent() == "Rating: "+review.rating;
        let valueTittle = await this.tittleValue.textContent() == "Title: "+ review.tittle;
        let valueDescription = await this.descriptionValue.textContent() == "Description: " + review.description;
        let value = valueRating && valueTittle && valueDescription;
        expect(value).toBeTruthy();

    }
 


    
    
}

export default ProductPage;