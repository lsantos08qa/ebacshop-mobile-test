import { $ } from '@wdio/globals'

class HomePage {
    async openMenu(menu) {
        await $(`//android.widget.TextView[@text="${menu}"]`).click(); // Usando XPath
    }
}

export default new HomePage();
