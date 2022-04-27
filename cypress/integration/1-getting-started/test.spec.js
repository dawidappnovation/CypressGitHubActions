/// <reference types="cypress" />

describe('example to-do app', () => {

  it('Bacic checkup', () => {
    cy.request('http://localhost:8000/').its('body').should('include', 'CypressGitHubActions')
  })
})
