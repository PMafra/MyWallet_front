import faker from 'faker';

describe('Sign-up', () => {
  it('Should sign-up sucessfully', () => {
    cy.visit('http://localhost:3000/sign-up');
    cy.get('input[placeholder=Nome]').type(faker.name.findName());
    cy.get('input[placeholder=E-mail]').type(faker.internet.email());
    cy.get('input[placeholder=Senha]').type('MyWallet123@');
    cy.get('input[placeholder="Confirme a senha"]').type('MyWallet123@');

    cy.contains('Cadastrar').click();
    cy.get('#info-message').should(($message) => {
      expect($message).to.contain('Conta criada com sucesso!');
    });
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
