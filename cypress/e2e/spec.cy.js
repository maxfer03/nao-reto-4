
describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('renders Register title', () => {
    cy.contains(/Admin Dashboard/i).should('exist');
  });

  it('Renders Submit Button', () => {
    cy.contains(/SUBMIT/i).should('exist');
  });

  it('Form is working correctly', () => {
    const test_data = {
      name: 'name',
      surname: 'surname',
      username: 'username',
      email: 'email@mymail.com',
      pw: 'mypwpwpw',
    };

    cy.get('label:contains("Name") + input').type(test_data.name);
    cy.get('label:contains("Surname") + input').type(test_data.surname);
    cy.get('label:contains("Username") + input').type(test_data.username);
    cy.get('label:contains("Email Address") + input').type(test_data.email);
    cy.get('label:contains("Password") + input').type(test_data.pw);


    cy.contains(/SUBMIT/i).click();

    cy.url().should('eq', 'http://localhost:3000/');
  });
});