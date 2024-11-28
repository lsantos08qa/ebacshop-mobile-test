const CadastroPage = require('../pages/cadastro.page.js')
const { faker } = require('@faker-js/faker')

describe('Fluxo de cadastro de usuário', () => {
    it('Deve cadastrar um novo usuário com sucesso', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const phone = faker.phone.number('###########')
        const email = faker.internet.email(firstName, lastName)
        const password = faker.internet.password(8, true)

        await CadastroPage.preencherCadastro(firstName, lastName, phone, email, password);
        await CadastroPage.clicarCriarConta();

        const successMessage = await $('~successMessage'); // Ajustar seletor real
        await expect(successMessage).toBeDisplayed();
        await expect(successMessage).toHaveTextContaining('Cadastro realizado com sucesso');
    });
});
