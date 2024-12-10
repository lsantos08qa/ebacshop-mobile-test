import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import storePage from '../pageobjects/store.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('Profile') 
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('Profile')
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    })

    it.only('Criar cadastro com sucesso', async () => {
        await homePage.openMenu('Profile') 
        await cadastroPage.cadastro('Lucas', 'Santos', '11912345678', 'lucas@testeebac.br', 'teste123', 'teste123')
        expect(await (await storePage.storeName('Lucas Santos')).isDisplayed()).toBeTruthy();
    });
})
