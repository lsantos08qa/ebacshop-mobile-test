//import { expect, driver } from 'wdio/globals'
import { expect, driver } from 'webdriverio'

import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import exp from 'constants'

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('cliente@ebac.art.br', 'GB*peTOHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    });
})