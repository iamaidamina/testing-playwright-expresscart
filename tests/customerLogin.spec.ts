import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page'
import { CustomerLoginPage } from '../pages/customer-login-page'
import { Utils } from '../pages/utils'
import { CustomerAccountPage } from '../pages/customer-account-page'


let homePage: HomePage;
let customerLoginPage: CustomerLoginPage;
let utils: Utils;
let customer = {
  email: "patroclo@gmail.com",
  password: "67890",
};
let customerAccountPage: CustomerAccountPage;


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
  await customerAccountPage.goToHome();
  await homePage.checkUrl();

});
