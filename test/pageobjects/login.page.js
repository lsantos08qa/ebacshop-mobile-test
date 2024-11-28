import { $ } from '@wdio/globals'

class LoginPage {

    get email (){
        return $('id:email')
    }
    get password (){
        return $('android=new UiSelector().text("Password)')   //('id:password') - outra forma de usar o seletor
    }
    get btnLogin(){
        return $('~Login') //$('id:bntLogin')
    }

    async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
    }
}

export default new LoginPage();
