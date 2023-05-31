class AccommodationPage {

    elements = {
    resultTitle: () => cy.get('h1[aria-live="assertive"]'),
    mapWrapper: () => cy.get('.map_full_overlay__wrapper'),
    closeMapWrapper: () => cy.get ('[aria-label="Close map"]'),
    lowestPrice: () => cy.get('[data-filters-item="pri:pri=1"]'),
    numberOfAccommodations: () => cy.get('[data-filters-item="pri:pri=1"] [data-testid="filters-group-label-container"] span')
    }


    closeMap() {
        if(this.elements.closeMapWrapper().length > 0) {
            this.elements.closeMapWrapper().click()
        }
    }

    checkFilter() {
        this.closeMap()
        this.elements.lowestPrice().eq(0).click()
        cy.url().should('contain', '/searchresults')
        this.elements.numberOfAccommodations().eq(0).invoke('text').as('numberAcc')
    }

    verifySearchResults(text) {
        this.closeMap()
        //cy.url().should('contain', text)
        cy.url().should('contain', '/searchresults')
        this.elements.resultTitle().should('contain', text)
        cy.then(function() {
            cy.get('h1[aria-live="assertive"]').should('contain', this.numberAcc)
        })
    }
        
}

module.exports = new AccommodationPage();