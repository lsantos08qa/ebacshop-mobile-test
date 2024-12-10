import { $ } from '@wdio/globals';

class CadastroPage {
    get btnSign() {
        return $('android=new UiSelector().text("Sign up")');
    }

    get firstName() {
        return $('#firstName'); // ou $('id=firstName')
    }

    get lastName() {
        return $('#lastName'); // ou $('id=lastName')
    }

    get phone() {
        return $('android=new UiSelector().resourceId("phone")');
    }

    get emailAddress() { 
        return $('#email'); // ou $('id=email')
    }

    get password() {
        return $('#password'); // ou $('id=password')
    }

    get rePassword() {
        return $('#repassword'); // ou $('id=repassword')
    }

    get btnCreate() {
        return $('#create'); // ou $('id=create')
    }

    async cadastro(firstName, lastName, phone, emailAddress, password, rePassword) {
        await this.btnSign.waitForDisplayed({ timeout: 5000 });
        await this.btnSign.click();
        await this.firstName.waitForDisplayed({ timeout: 5000 });
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.phone.waitForDisplayed({ timeout: 5000 });
        await this.phone.setValue(phone);
        await this.emailAddress.waitForDisplayed({ timeout: 5000 });
        await this.emailAddress.setValue(emailAddress);
        await this.password.waitForDisplayed({ timeout: 5000 });
        await this.password.setValue(password);
        await this.rePassword.waitForDisplayed({ timeout: 5000 });
        await this.rePassword.setValue(rePassword);
        await this.btnCreate.waitForDisplayed({ timeout: 5000 });
        await this.btnCreate.click();
    }
}

export default new CadastroPage();
