// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import './commands'

Cypress.Commands.add('createTestAccount', () => {

    const email = Cypress.env('testAccount')
    if (email.includes('[') || email.includes(']')) {
        throw new Error(`Email contains invalid characters`)
    }

    localStorage.testAccountCreated = true
})

Cypress.Commands.add('deleteTestAccount', () => {
    const projects = localStorage._projects ? JSON.parse(localStorage._projects) : []
    const filteredProjects = projects.filter(p => p.owner !== Cypress.env('testUserId'))
    localStorage._projects = JSON.stringify(filteredProjects)

    localStorage.removeItem('testAccountCreated')
})

Cypress.Commands.add('login', () => {
    const firstName = Cypress.env('testFirstName')
    const lastName = Cypress.env('testLastName')

    const user = {
        id: Cypress.env('testUserId'),
        lastName,
        firstName,
        email: Cypress.env('testAccount'),
        avatar: `https://ui-avatars.com/api/?background=random&name=${firstName}+${lastName}&format=svg`
    }

    window.localStorage._currentUser = JSON.stringify(user)
})

Cypress.Commands.add('logout', () => {
    window.localStorage.removeItem('_currentUser')
    cy.reload()
    cy.wait(250)
})
