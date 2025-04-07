//imports
import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'



//funções BDD
When('clico em Automobile', () => {
    cy.selecionoCarro()    
})

And('preencho a aba vehicle', () => {
    cy.preencheVehicleData()
})

And('preencho a aba insurant data', () => {
    cy.preencheInsurantData()
})

And('preencho a aba product data', () => {
    cy.preencheProductData()
})

And('seleciono o price option', () => {
    cy.selecionaPriceOption()
})

And('preencho a aba send quote', () => {
    cy.preencheSendQuote()
})

And('clico em send', () => {
    cy.clicoEmSend()
})

Then('valido o envio da quota', () => {
    cy.sendSuccess()
})

And('preencho engine performance invalido', () => {
    cy.preencheEngineInvalido()
})

Then('devo ver a mensagem Valor inválido', () => {
    cy.vejoErroEnginePerformance()
})
