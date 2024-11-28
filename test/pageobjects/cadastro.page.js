import { $ } from '@wdio/globals'

class CadastroPage {
    get inputFirstName() {
        return $('~firstName')
    }
    get inputLastName() {
        return $('~lastName')
    }
    get inputPhoneNumber() {
        return $('android=new UiSelector().text("Phone Number")')
    }
    get inputEmail() {
        return $('~email')
    }
    get inputPassword() {
        return $('~password')
    }
    get inputRePassword() {
        return $('~repassword')
    }
    get btnCreate() {
        return $('~create')
    }
    async preencherCadastro(firstName, lastName, phone, email, password) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPhoneNumber.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRePassword.setValue(password);
    }
    async clicarCriarConta() {
        await this.btnCreate.click();
    }
}

module.exports = new CadastroPage();
