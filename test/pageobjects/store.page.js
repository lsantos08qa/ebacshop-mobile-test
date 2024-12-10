import { $ } from '@wdio/globals'

class storePage {
  async storeName(name) {
    return await $(`android.widget.TextView[@text="${name}"]`);
  }
}

export default new storePage();