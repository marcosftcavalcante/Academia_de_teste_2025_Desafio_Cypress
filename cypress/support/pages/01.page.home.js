//Home Page

//selectors da página
const BTN_AUTOMOBILE = '#nav_automobile'
const VEHICLE_SELECTED = '#selectedinsurance'

//função para selecionar carro
Cypress.Commands.add('selecionoCarro', () => {
    cy.get(BTN_AUTOMOBILE).click()
    cy.get(VEHICLE_SELECTED).should('be.visible')
    
    cy.log('veículo selecionado')    
})