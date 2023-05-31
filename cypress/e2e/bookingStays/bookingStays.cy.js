import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
const StaysPage = require ('../../pages/StaysPage');
const AccommodationPage = require ('../../pages/AccommodationPage');

//const url = "https://www.booking.com/"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given ("I am on Booking page", () => {
    cy.viewport(1920, 1080)
    cy.visit("https://www.booking.com/")
    StaysPage.clickDismissSignInBtn()
});

When ("I enter {string} in destination", (destination) => {
    StaysPage.typeToDestinationField(destination)
    //cy.wait(3000)
});

When ("I select {string} result from dropdown", (destination) => {
    StaysPage.clickLocationResult(destination)
});

When ("I select start date {string} from calendar", (startDate) => {
    StaysPage.setDate(startDate)
});

When ("I select end date {string} from calendar", (endDate) => {
    StaysPage.setDate(endDate)
});

When ("I populate occupancy form", () => {
    StaysPage.populateOccupancyForm()
});

When ("I click on search button", () => {
    StaysPage.clickSearchBtn()
});

When ("I check the filter with the lowest price", () => {
    AccommodationPage.checkFilter()
});

Then ("I should be able to see available appartments at {string}", (destination) => {
    //TODO
    AccommodationPage.verifySearchResults(destination)
});

