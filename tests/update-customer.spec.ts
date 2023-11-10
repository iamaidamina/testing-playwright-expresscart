import { test, expect } from '@playwright/test';
import { AdminLoginPage } from '../pages/admin-login-page'
import { Utils } from '../pages/utils'
import { AdminDashboardPage } from '../pages/admin-dashboard-page'
import { CustomerModulePage} from '../pages/customer-module-page'
import { CustomerUpdatePage} from '../pages/customer-update-page'


let adminLoginPage: AdminLoginPage;
let utils: Utils;
let admin = {
  email: "aida@gmail.com",
  password: "12345",
};
let adminDashboardPage: AdminDashboardPage;
let customer = {
  name:"Patroclo"
}
let customerModulePage: CustomerModulePage;
let customerUpdatePage: CustomerUpdatePage;
let customerUpdate = {
  email: "patroclo@gmail.com",
  first:"Patroclo",
  last:"Jimenez",
  address:"Calle 14 # 42-28",
  country:"Barbados",
  state: "Brisbane",
  postcode: "425568",
  phone: "12367899",
  password:"67890"
}

test('update a customer', async ({ page }, testInfo) => {
  utils = new Utils(page);
  await page.goto('http://127.0.0.1:1111/admin');
  adminLoginPage = new AdminLoginPage(page);
  await adminLoginPage.checkUrl(/.*login/);
  await utils.takeScreenShot(testInfo);
  await adminLoginPage.fillLoginForm(admin);
  await utils.takeScreenShot(testInfo);
  adminDashboardPage = new AdminDashboardPage(page);
  await adminDashboardPage.checkUrl(/.*dashboard/)
  await utils.takeScreenShot(testInfo);
  await adminDashboardPage.goToCustomerModule();
  await adminDashboardPage.checkUrl(/.*customers/)
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  customerModulePage =new CustomerModulePage(page)
  customerModulePage.pickCustomer(customer)
  await page.waitForTimeout(2000);
  await utils.takeScreenShot(testInfo);
  customerUpdatePage = new CustomerUpdatePage(page)
  await customerUpdatePage.checkTittle("Customer")
  await customerUpdatePage.updateAllForm(customerUpdate)
  await customerUpdatePage.checkConfirmMessage('Customer updated')
  await utils.takeScreenShot(testInfo);

});
