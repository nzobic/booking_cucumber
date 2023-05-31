import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
const StaysPage = require ('../../pages/StaysPage');
const FlightsPage = require ('../../pages/FlightsPage')
const FlightTicketsPage = require ('../../pages/FlightTicketsPage')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given ("I am on Booking page", () => {
    cy.viewport(1920, 1080)
    cy.visit("https://www.booking.com/")
    StaysPage.clickDismissSignInBtn()
});

When ("I switch tab to Flights", () => {
    StaysPage.switchTabToFlights()
    cy.url().should('contain', '/flights')
});

When ("I enter {string} in Where from? search field, and select {string} Airport", (locationFrom, airport) => {
    FlightsPage.selectLocationFrom(locationFrom, airport)
});

When ("I enter {string} in Where to? search field, and select {string} Airport", (locationTo, airport) => {
    FlightsPage.selectLocationTo(locationTo, airport)
});

When ("I select Start date {string} from calendar", (date) => {
    FlightsPage.clickOnCalendarAndSetDate(date)
});

When ("I select End date {string} from calendar", (date) => {
    FlightsPage.clickOnCalendarAndSetDate(date)
});

When ("I click on search button", () => {
    FlightsPage.clickOnSearchButton()
});

When ("I check the filter with {string}", (filter) => {
    FlightTicketsPage.waitOverlayIsNotVisibleAndCheckFilter(filter)
    cy.url().should('contain', 'stops=1')
});

Then ("I should be able to see available flights with selected filter {string}", (result) => {
    FlightTicketsPage.verifySearchResults(result)
});