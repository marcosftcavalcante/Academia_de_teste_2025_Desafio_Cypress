//Página de cotação para carros (Automobile)

//imports
import {faker} from '@faker-js/faker';

//-----------------------------------ABA VEHICLE DATA---------------------------------------------



//selectors da página
const CAMPOS_MANDATORIOS_VEHICLE_DATA = '#entervehicledata > .counter' //Número de campos mandatórios a serem preenchidos
const NEXT_INSURANT_DATA = '#nextenterinsurantdata'



//selectors da guia vehicle data
const SELECTORS_VEHICLE_DATA = {
    MAKE: '#make',
    ENGINE_PERFORMANCE: '#engineperformance',
    DATE_OF_MANUFACTURE: '#dateofmanufacture',
    NUMBER_OF_SEATS: '#numberofseats',
    FUEL_TYPE: '#fuel',
    LIST_PRICE: '#listprice',
    LICENSE_PLATE_NUMBER: '#licenseplatenumber',
    ANNUAL_MILEAGE: '#annualmileage',
}



//variáveis a serem usadas no preenchimento da guia enter vehicle data
const VEHICLE_DATA = {
    make: faker.helpers.arrayElement(['Audi','BMW','Ford','Honda','Mazda','Mercedes Benz','Nissan','Opel','Porsche','Renault','Skoda','Suzuki','Toyota','Volkswagen','Volvo']),
    enginePerformance: faker.number.int({ min: 1, max: 2000 }).toString(),
    dateOfManufacture: faker.date.past(50).toLocaleDateString('en-US'), // formato MM/DD/YYYY
    numberOfSeats: faker.helpers.arrayElement(['4', '5', '7', '8', '9']),//múmeros de assentos conhecidos em veículos
    fuelType: faker.helpers.arrayElement(['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other']),
    listPrice: faker.number.int({ min: 500, max: 100000 }).toString(),
    licensePlate: faker.vehicle.vrm(),
    annualMileage: faker.number.int({ min: 15500, max: 37300 }).toString(),//quilômetragem anual entre ~25.000km à 45.000km
}



//função para preencher a aba vehicle data
Cypress.Commands.add('preencheVehicleData', () => {
    cy.get(CAMPOS_MANDATORIOS_VEHICLE_DATA).should('have.text', '7')

    cy.get(SELECTORS_VEHICLE_DATA.MAKE).select(VEHICLE_DATA.make)
    cy.get(SELECTORS_VEHICLE_DATA.ENGINE_PERFORMANCE).type(VEHICLE_DATA.enginePerformance)
    cy.get(SELECTORS_VEHICLE_DATA.DATE_OF_MANUFACTURE).type(VEHICLE_DATA.dateOfManufacture)
    cy.get(SELECTORS_VEHICLE_DATA.NUMBER_OF_SEATS).select(VEHICLE_DATA.numberOfSeats)
    cy.get(SELECTORS_VEHICLE_DATA.FUEL_TYPE).select(VEHICLE_DATA.fuelType)
    cy.get(SELECTORS_VEHICLE_DATA.LIST_PRICE).type(VEHICLE_DATA.listPrice)
    cy.get(SELECTORS_VEHICLE_DATA.LICENSE_PLATE_NUMBER).type(VEHICLE_DATA.licensePlate)
    cy.get(SELECTORS_VEHICLE_DATA.ANNUAL_MILEAGE).type(VEHICLE_DATA.annualMileage)

    cy.get(CAMPOS_MANDATORIOS_VEHICLE_DATA).should('have.text', '0')
    cy.log('Dados preenchidos corretamente')
    cy.screenshot('01-Aba vehicle data preenchida')
    cy.get(NEXT_INSURANT_DATA).click()
})



//-------------------------------------------------------------------------------------------------

//-----------------------------------ABA INSURANT DATA---------------------------------------------



//selectors da página
const CAMPOS_MANDATORIOS_INSURANT_DATA = '#enterinsurantdata > .counter'
const NEXT_PRODUCT_DATA = '#nextenterproductdata'



//selectors da guia insunrance data
const SELECTORS_INSURANT_DATA = {
    FIRST_NAME: '#firstname',
    LAST_NAME: '#lastname',
    DATE_OF_BIRTH: '#birthdate',
    GENDER: Cypress.env('gender'),
    STREET_ADDRESS: '#streetaddress',
    COUNTRY: '#country',
    ZIP_CODE: '#zipcode',
    CITY: '#city',
    OCCUPATION: '#occupation',
    HOBBIES: Cypress.env('hobbies'),
    WEBSITE: '#website',
    PICTURE: '#picture',
    PICTURE_OPEN: '#open',
}



//variáveis a serem usadas no preenchimento da guia enter insurant data
const INSURANT_DATA = {
    firstName: Cypress.env('firstName'),
    lastName: Cypress.env('lastName'),
    dateOfBirth: Cypress.env('dateOfbirth'),//Deve ter entre 18 a 70 anos
    GENDER: 'input[id="gendermale"]',//Definido como masculino direto
    streetAddress: Cypress.env('streetAddress'),
    country: Cypress.env('country'),
    zipCode: Cypress.env('zipCode'),
    city: Cypress.env('city'),
    occupation: Cypress.env('occupation'),
    hobbies: Cypress.env('hobbies'),
    webSite: Cypress.env('webSite'),
}



//função para preencher a aba insurant data
Cypress.Commands.add('preencheInsurantData', () => {
    cy.get(CAMPOS_MANDATORIOS_INSURANT_DATA).should('have.text', '7')

    cy.get(SELECTORS_INSURANT_DATA.FIRST_NAME).type(INSURANT_DATA.firstName)
    cy.get(SELECTORS_INSURANT_DATA.LAST_NAME).type(INSURANT_DATA.lastName)
    cy.get(SELECTORS_INSURANT_DATA.DATE_OF_BIRTH).type(INSURANT_DATA.dateOfBirth)
    cy.get(SELECTORS_INSURANT_DATA.GENDER).check({force: true})
    cy.get(SELECTORS_INSURANT_DATA.STREET_ADDRESS).type(INSURANT_DATA.streetAddress)
    cy.get(SELECTORS_INSURANT_DATA.COUNTRY).select(INSURANT_DATA.country)
    cy.get(SELECTORS_INSURANT_DATA.ZIP_CODE).type(INSURANT_DATA.zipCode)
    cy.get(SELECTORS_INSURANT_DATA.CITY).type(INSURANT_DATA.city)
    cy.get(SELECTORS_INSURANT_DATA.OCCUPATION).select(INSURANT_DATA.occupation)
    cy.get(SELECTORS_INSURANT_DATA.HOBBIES).check({force: true})
    cy.get(SELECTORS_INSURANT_DATA.WEBSITE).type(INSURANT_DATA.webSite)

    cy.get(CAMPOS_MANDATORIOS_INSURANT_DATA).should('have.text', '0')
    cy.log('Dados preenchidos corretamente')
    cy.screenshot('02-Aba insurant data preenchida')
    cy.get(NEXT_PRODUCT_DATA).click()

    
})



//-------------------------------------------------------------------------------------------------

//-----------------------------------ABA PRODUCT DATA---------------------------------------------



//selectors da página
const CAMPOS_MANDATORIOS_PRODCUT_DATA = '#enterproductdata > .counter'
const NEXT_PRICE_OPTION = '#nextselectpriceoption'



//selectors da guia product data
const SELECTORS_PRODUCT_DATA = {
    START_DATA: '#startdate',
    INSURANCE_SUM: '#insurancesum',
    MERIT_RATING: '#meritrating',
    DAMAGE_INSURANCE: '#damageinsurance',
    OPTIONAL_PRODUCTS: faker.helpers.arrayElement(['#EuroProtection','#LegalDefenseInsurance']),
    COURTESY_CAR: '#courtesycar',
}



//variáveis auxiliares
const HOJE = new Date()
const UM_MES_FRENTE = new Date(HOJE.setMonth(HOJE.getMonth()+1))
//variáveis a serem usadas no preenchimento da guia enter product data
const PRODUCT_DATA = {
    //starData: faker.date.future(1, UM_MES_FRENTE).toLocaleDateString('en-US'), //data futura, maior que um mês
    starData: faker.date.between({ from: '2025-05-25', to: '2025-12-31' }).toLocaleDateString('en-US'),
    insuranceSum: faker.helpers.arrayElement(['3.000.000,00','5.000.000,00','7.000.000,00','10.000.000,00','15.000.000,00','20.000.000,00','25.000.000,00','30.000.000,00','35.000.000,00']),
    meritRating: faker.helpers.arrayElement(['Super Bonus','Bonus 1','Bonus 2','Bonus 3','Bonus 4','Bonus 5','Bonus 6','Bonus 7','Bonus 8','Bonus 9','Malus 10','Malus 11','Malus 12','Malus 13','Malus 14','Malus 15','Malus 16','Malus 17']),
    damageInsurance: faker.helpers.arrayElement(['No Coverage','Partial Coverage','Full Coverage']),
    optionalProducts:'',//variável de check, já será escolhida através do seletor.
    courtesyCar: faker.helpers.arrayElement(['No','Yes']),
}



Cypress.Commands.add('preencheProductData', () => {
    cy.get(CAMPOS_MANDATORIOS_PRODCUT_DATA).should('have.text', '6')

    cy.get(SELECTORS_PRODUCT_DATA.START_DATA).type(PRODUCT_DATA.starData)
    cy.get(SELECTORS_PRODUCT_DATA.INSURANCE_SUM).select(PRODUCT_DATA.insuranceSum)
    cy.get(SELECTORS_PRODUCT_DATA.MERIT_RATING).select(PRODUCT_DATA.meritRating)
    cy.get(SELECTORS_PRODUCT_DATA.DAMAGE_INSURANCE).select(PRODUCT_DATA.damageInsurance)
    cy.get(SELECTORS_PRODUCT_DATA.OPTIONAL_PRODUCTS).check({force: true})
    cy.get(SELECTORS_PRODUCT_DATA.COURTESY_CAR).select(PRODUCT_DATA.courtesyCar)

    cy.get(CAMPOS_MANDATORIOS_PRODCUT_DATA).should('have.text', '0')
    cy.log('Dados preenchidos corretamente')
    cy.screenshot('03-Aba product data preenchida')
    cy.get(NEXT_PRICE_OPTION).click()
})



//------------------------------------------------------------------------------------------------

//-----------------------------------ABA PRICE OPTION---------------------------------------------



//selectors da página
const CAMPOS_MANDATORIOS_PRICE_OPTION = '#selectpriceoption > .counter'
const NEXT_SEND_QUOTE = '#nextsendquote'



//selectors da guia price options
const SELECTORS_PRICE_OPTIONS = {
    SELECT_OPTIONS: faker.helpers.arrayElement(['#selectsilver','#selectgold','#selectplatinum','#selectultimate']),
}



Cypress.Commands.add('selecionaPriceOption', () => {
    cy.get(CAMPOS_MANDATORIOS_PRICE_OPTION).should('have.text', '1')

    cy.get(SELECTORS_PRICE_OPTIONS.SELECT_OPTIONS).check({force: true})

    cy.get(CAMPOS_MANDATORIOS_PRICE_OPTION).should('have.text', '0')
    cy.log('Preço selecionado corretamente')
    cy.screenshot('04-Aba price option selecionada')
    cy.get(NEXT_SEND_QUOTE).click()
})



//------------------------------------------------------------------------------------------------

//------------------------------------ABA SEND QUOTE----------------------------------------------



//selectors da página
const CAMPOS_MANDATORIOS_SEND_QUOTE = '#sendquote > .counter'



//selectors da guia send quote
const SELECTORS_SEND_QUOTE = {
    EMAIL: '#email',
    PHONE: '#phone',
    USERNAME: '#username',
    PASSWORD: '#password',
    CONFIRM_PASSWORD: '#confirmpassword',
    COMMENTS:'#Comments',
}



//variáveis a serem usadas no preenchimento da guia send quote
const SEND_QUOTE = {
    email: faker.internet.email(),
    phone: faker.number.int({ min: 100000000, max: 999999999 }).toString(),//de 8 a 15 digitos, sendo somente números.
    userName: faker.internet.username(),//de 4 a 32 caracteres.
    passWord: Cypress.env('password'),//maior que 6 caracteres, uma maiúscula, uma minúscula.
    confirmPassWord: Cypress.env('password'),
    comments: "É muito legal fazer esses testes automatizados!",
}



Cypress.Commands.add('preencheSendQuote', () => {
    cy.get(CAMPOS_MANDATORIOS_SEND_QUOTE).should('have.text', '4')

    cy.get(SELECTORS_SEND_QUOTE.EMAIL).type(SEND_QUOTE.email)
    cy.get(SELECTORS_SEND_QUOTE.PHONE).type(SEND_QUOTE.phone)
    cy.get(SELECTORS_SEND_QUOTE.USERNAME).type(SEND_QUOTE.userName)
    cy.get(SELECTORS_SEND_QUOTE.PASSWORD).type(SEND_QUOTE.passWord)
    cy.get(SELECTORS_SEND_QUOTE.CONFIRM_PASSWORD).type(SEND_QUOTE.confirmPassWord)
    cy.get(SELECTORS_SEND_QUOTE.COMMENTS).type(SEND_QUOTE.comments)

    cy.get(CAMPOS_MANDATORIOS_SEND_QUOTE).should('have.text', '0')
    cy.log('Aba preenchida corretamente, quota será enviada por e-mail')
    cy.screenshot('05-Aba send quote preenchida')
})



//------------------------------------------------------------------------------------------------

//-----------------------------------------Envio da Cotação---------------------------------------


//selectors
const SEND_EMAIL = '#sendemail'



Cypress.Commands.add('clicoEmSend', () => {
    cy.get(SEND_EMAIL).click()
    cy.log('Email disparado')
})



//------------------------------------------------------------------------------------------------

//-----------------------------------------Validação do envio-------------------------------------


//selectors
const OK_SEND = '.confirm'
const LOGO_TRICENTIS = '#tricentis_logo'

Cypress.Commands.add('sendSuccess', () => {
    cy.contains('h2', 'Sending e-mail success!', { timeout: 15000 }).should('be.visible')
    cy.log('E-mail enviado com sucesso')
    cy.screenshot('06-quota enviada com sucesso')
    cy.get(OK_SEND).click()
    cy.get(LOGO_TRICENTIS).click()
})



//------------------------------------------------------------------------------------------------

//----------------------------------engine performance invalido-----------------------------------
const MAKE = '#make'
const ENGINE_PERFORMANCE = '#engineperformance'

Cypress.Commands.add('preencheEngineInvalido', () => {
    cy.get(MAKE).select('Volkswagen')
    cy.get(ENGINE_PERFORMANCE).type(faker.number.int({ min: 2001, max: 5000 }).toString()) //faker.number.int({ min: 2001, max: 5000 }).toString()
    
})

Cypress.Commands.add('vejoErroEnginePerformance', () => {
    cy.get('span.error').should('be.visible').and('contain','Must be a number between 1 and 2000')
    cy.log("aviso de valor invalido aparente")
    cy.screenshot('01-campo engine performance invalido')
})