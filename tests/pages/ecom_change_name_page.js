import { expect } from "@playwright/test";

export class EcomChangePage {
    constructor(page){
        this.page = page;
        this.editAccount = page.getByRole('link', {name: "Edit your account information"});
        this.FirstName_field = page.getByPlaceholder('First Name');
        this.LastName_field = page.getByPlaceholder('Last Name');
        this.continue_btn = page.locator("input[value='Continue']");
        this.success_message = page.getByText('Success: Your account has been successfully updated.')
    }

    async clickOnEditAccount(){
        await this.editAccount.click();
    }

    async changeFirstName(firstName){
        await this.FirstName_field.fill(firstName);
    }

    async changeLastName(lastName){
        await this.LastName_field.fill(lastName);
    }

    async clickOnContinue(){
        await this.continue_btn.click();
    }

    async verifySuccessMessage(message){
        await expect(this.success_message).toBeVisible();
        await expect(this.success_message).toContainText(new RegExp(message));
    }
}

