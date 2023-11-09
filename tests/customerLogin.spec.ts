import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page'
import { CustomerLoginPage } from '../pages/customer-login-page'
import { Utils } from '../pages/utils'
import { CustomerAccountPage } from '../pages/customer-account-page'
import {ProductPage} from '../pages/product-page'


let homePage: HomePage;
let customerLoginPage: CustomerLoginPage;
let utils: Utils;
let customer = {
  email: "patroclo@gmail.com",
  password: "67890",
};
let customerAccountPage: CustomerAccountPage;
let product = {
  name: "big-pony-chino-ball-cap"
};
let productPage: ProductPage;
let review = {
  tittle: "Good",
  description: "Nice",
  rating:"4"
}


test('Go to Costumer Login Page', async ({ page }, testInfo) => {
  utils = new Utils(page);
  await page.goto('http://127.0.0.1:1111/');
  homePage = new HomePage(page);
  await homePage.checkUrl();
  await utils.takeScreenShot(testInfo);
  await homePage.clickCustomerLoginButton();
  customerLoginPage = new CustomerLoginPage(page);
  await customerLoginPage.checkUrl(/.*login/);
  await utils.takeScreenShot(testInfo);
  await customerLoginPage.fillLoginForm(customer);
  await utils.takeScreenShot(testInfo);
  customerAccountPage = new CustomerAccountPage(page);
  await customerAccountPage.checkUrl(/.*account/);
  await utils.takeScreenShot(testInfo);
  await customerAccountPage.goToHome();
  await homePage.checkUrl();
  await homePage.pickProduct(product)
  productPage = new ProductPage(page)
  await page.waitForTimeout(2000);
  await productPage.checkUrl(product)
  await utils.takeScreenShot(testInfo);
  await productPage.clickAddReviewButton();
  await page.waitForTimeout(2000);
  await productPage.checkModalReview();
  await productPage.fillReviewModal(review)
  await utils.takeScreenShot(testInfo)
  await page.waitForTimeout(2000);
  await productPage.clickRecentReviewLlink();
  await utils.takeScreenShot(testInfo);
  await productPage.scrollDownUntilViewReview();
  await utils.takeScreenShot(testInfo);
  await productPage.checkReviewCreation(review);
  

});
