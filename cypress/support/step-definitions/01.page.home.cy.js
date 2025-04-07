//imports
import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'



//funções BDD
Given('que estou na home page', () => {
    cy.visit('https://sampleapp.tricentis.com/101/index.php')
})