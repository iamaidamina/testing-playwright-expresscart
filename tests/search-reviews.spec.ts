import { test, expect } from '@playwright/test';
import { AdminLoginPage } from '../pages/admin-login-page'
import { Utils } from '../pages/utils'
import { AdminDashboardPage } from '../pages/admin-dashboard-page'
import { SearchReviewsPage} from '../pages/search-reviews-page'


let adminLoginPage: AdminLoginPage;
let utils: Utils;
let admin = {
  email: "aida@gmail.com",
  password: "12345",
};
let adminDashboardPage: AdminDashboardPage;
let searchReviewsPage: SearchReviewsPage;

test('search reviews', async ({ page }, testInfo) => {
  utils = new Utils(page);
  await page.goto('http://127.0.0.1:1111/admin');
  adminLoginPage = new AdminLoginPage(page);
  await adminLoginPage.checkUrl(/.*login/);
  await utils.takeScreenShot(testInfo);
  await adminLoginPage.fillLoginForm(admin);
  await utils.takeScreenShot(testInfo);
  adminDashboardPage = new AdminDashboardPage(page);
  await adminDashboardPage.checkUrl(/.*dashboard/)
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  await adminDashboardPage.goToReviewModule();
  await adminDashboardPage.checkUrl(/.*reviews/)
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  searchReviewsPage = new SearchReviewsPage(page);
  await searchReviewsPage.fillSearchBar("sad summer");
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  await searchReviewsPage.applyFilter();
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  //await searchReviewsPage.checkSearchResult("sad summer")
 

});
