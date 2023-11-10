import { test, expect } from '@playwright/test';
import { AdminLoginPage } from '../pages/admin-login-page'
import { Utils } from '../pages/utils'
import { AdminDashboardPage } from '../pages/admin-dashboard-page'
import { UserModulePage} from '../pages/user-module-page'


let adminLoginPage: AdminLoginPage;
let utils: Utils;
let admin = {
  email: "aida@gmail.com",
  password: "12345",
};
let adminDashboardPage: AdminDashboardPage;
let userModulePage: UserModulePage;
let user = {name:"nathalie bjorn"}


test('delete a user', async ({ page }, testInfo) => {
  utils = new Utils(page);
  await page.goto('http://127.0.0.1:1111/admin');
  adminLoginPage = new AdminLoginPage(page);
  await adminLoginPage.checkUrl(/.*login/);
  await utils.takeScreenShot(testInfo);
  await adminLoginPage.fillLoginForm(admin);
  await utils.takeScreenShot(testInfo);
  await page.waitForTimeout(2000);
  adminDashboardPage = new AdminDashboardPage(page);
  await adminDashboardPage.checkUrl(/.*dashboard/)
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  await adminDashboardPage.goToUserModule();
  await adminDashboardPage.checkUrl(/.*users/)
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  userModulePage = new UserModulePage(page);
  userModulePage.pickUser(user);
  await page.waitForTimeout(4000);
  //userModulePage.handleAlert();
  await utils.takeScreenShot(testInfo);
  
 

});
