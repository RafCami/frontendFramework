const testRepoName = 'Test Repository'
const testRepoDescription = 'Cypress test repository'

Cypress._.times(100, () => {
    describe('Create and view projects and repositories', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        describe(`An unauthenticated user`, () => {
            it(`Can't see any private projects and corresponding repositories in the 'My projects' view`, () => {
                cy.getByData('my-repositories-btn').should('exist').click()
                cy.getByData('project-btn').should('not.exist')
                cy.getByData('repository').should('not.exist')
            })

            it(`Can see at least one public projects and repository in the 'Public projects' view`, () => {
                cy.getByData('public-repositories-btn').should('exist').click()
                cy.getByData('public-repositories-btn').should('have.class', 'active')
                cy.getByData('project-btn').should('exist')
                cy.getByData('repository').should('exist')

            })
        })

        describe(`An authenticated user`, () => {

            beforeEach(() => {
                cy.createTestAccount()
                cy.login()
                cy.visit('/')
            })

            afterEach(() => {
                cy.deleteTestAccount()
            })

            it(`Can see at least one private project and repository.`, () => {
                cy.getByData('my-repositories-btn').should('exist').click()
                cy.getByData('project-btn').should('exist')
                cy.getByData('repository').should('exist')
            })

            it(`Can't submit a form with an empty name and description`, () => {
                // Fails and requires a fix.
                cy.getByData('new-repo-modal-btn').click()
                cy.getByData('name').should('exist').should('be.empty')
                cy.getByData('description').should('exist').should('be.empty')

                cy.getByData('repository').its('length').then(oldLength => {
                    cy.getByData('create-new-repo-btn').click()
                    cy.getByData('repository').its('length').should('eq', oldLength)
                })
            })

            it(`Can successfully submit a form with a valid name and description and see the new repository`, () => {
                cy.getByData('new-repo-modal-btn').click()
                cy.getByData('name').should('exist').type(testRepoName)
                cy.getByData('description').should('exist').type(testRepoDescription)

                cy.getByData('repository').its('length').then(oldLength => {
                    cy.getByData('create-new-repo-btn').click()
                    cy.getByData('repository').its('length').should('eq', oldLength + 1)
                    cy.getByData('repository').should('include.text', testRepoName)
                    cy.getByData('repository').should('include.text', testRepoDescription)
                })
            })
        })
    })

})
