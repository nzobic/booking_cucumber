class FlightTicketsPage {

    elements = {
        //searchLoadingOverlay: () => cy.get('[data-testid="search_loading_overlay"] > div'),
        filterStops: () => cy.get('[data-testid*="flight_card_segment_stops"]')
    }


    waitOverlayIsNotVisible() {
        cy.get('[data-testid="search_loading_overlay"] > div', {timeout: 15000}).should('not.be.visible')
        // cy.waitUntil(() => cy.get('[data-testid="search_loading_overlay"] > div').should('not.be.visible')), {
        //     timeout: 15000
        // }
        // cy.waitUntil(() => cy.get('[data-testid="search_loading_overlay"]').invoke('style').should('eq,', 'opacity: 0; display: none;'))
    }

    checkFilter(text) {
        cy.get('[name="'+text+'"]').click()
    }

    waitOverlayIsNotVisibleAndCheckFilter(text) {
        this.waitOverlayIsNotVisible()
        this.checkFilter(text)
    }

    verifySearchResults(text) {
        this.elements.filterStops().each(($el) => {
            cy.wrap($el).invoke('text').should('eq', text)
        })
    }
    
}

module.exports = new FlightTicketsPage();