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

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/01.page.home'
import './pages/02.page.Automobile_Insurance'
import './pages/03.page.Truck_Insurance'
import './pages/04.page.Motorcycle_Insurance'
import './pages/05.page.Camper_Insurance'


//tratamento para o erro da aplicação
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora o erro "e is not defined" que ocorre após clicar em 'Send'
    if (err.message.includes('e is not defined')) {
      return false
    }
  })
