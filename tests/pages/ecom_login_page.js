import { expect } from "@playwright/test";
// Import the locators
import * as log_loc from '../locators/ecom_login_locators.json'; 

class EcomLoginPage {

    constructor(page){
        this.page = page;
        this.my_account_btn = page.getByRole('button', log_loc.my_account_btn);
        this.email_box = page.getByPlaceholder(log_loc.email_box.placeholder);
        this.password_box = page.getByPlaceholder(log_loc.password_box.placeholder);
        this.submit_btn = page.locator(log_loc.submit_btn);
    }

    async navigateToUrl(url) {
        await this.page.goto(url);
    }

    async clickOnMyAccount() {
        await this.my_account_btn.click();
    }

    async enterEmailAddress(emailAddress){
        await this.email_box.fill(emailAddress);
    }

    async enterPassword(password){
        await this.password_box.fill(password);
    }

    async clickOnSubmit(){
        await this.submit_btn.click();
    }

    async verifyUserLandOnAccountPage(logged_url){
        await expect(this.page).toHaveURL(new RegExp(logged_url));
    }

    async verifyUserIsNotAbleToLogin(login_url){
        await expect(this.page).toHaveURL(new RegExp(login_url));
    }
}

export { EcomLoginPage };
