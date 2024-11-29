//import { $ } from '@wdio/globals'
import { $ } from 'webdriverio'


class ProfilePage {
    async profileName (name){
        return await $(`//android.widget.TextView[@text="${name}"]`)
    }

}
export default new ProfilePage ();
