//import { $ } from '@wdio/globals'
import { $ } from 'webdriverio'

class HomePage {

    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }

}

export default new HomePage();
