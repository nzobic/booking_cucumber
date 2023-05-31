class StaysPage {

    elements = {
    // dismissSignInBtn: () => cy.get('[aria-label="Dismiss sign in information."]'),
    destinationField: () => cy.get('[data-testid="destination-container"]'),
    calendarArrowNext: () => cy.get('[data-testid="searchbox-datepicker-calendar"] button:last-of-type'),
    occupancyForm: () => cy.get('[data-testid="searchbox-form-button-icon"]'),
    groupAdults: () => cy.get('#group_adults'),
    numberOfRooms: () => cy.get('#no_rooms'),
    minusPlusBtn: () => cy.get('[data-testid="occupancy-popup"] [tabindex="-1"]'),
    searchBtn: () => cy.get('[type="submit"]'),
    tabs: () => cy.get('[data-testid="header-xpb"] a')
    }


    clickDismissSignInBtn() {
        if(cy.get('[aria-label="Dismiss sign in information."]').should('exist', 5000)) {
            cy.get('[aria-label="Dismiss sign in information."]').click()
        }
    }
    
    typeToDestinationField(text) {
        this.elements.destinationField().click().type(text)
    }

    clickLocationResult(text) {
        cy.xpath("//div[text() = '$']".replace('$', text)).should('be.visible').click()
    }

    // setDate(date) {
    //     while(true) {
    //         if (cy.get('[data-date="' +date+ '"]').should('not.exist')) {
    //             this.elements.calendarArrowNext().click()
    //             break
    //         } else {
    //             cy.get('[data-date="' +date+ '"]').click()
    //         }
    //     }
    // }

    setDate(date) {
        cy.get('body').then(($body) => {
            if($body.find('[data-date="' +date+ '"]').length) {
                cy.get('[data-date="' +date+ '"]').click()
            } else {
                this.elements.calendarArrowNext().click().then(() => {
                    this.setDate(date)
                })
            }
        })
    }

    clickOccupancyForm() {
        this.elements.occupancyForm().click()
    }

    setGroupAdults() {
        this.elements.groupAdults().invoke('attr', 'value').then((value) => {
            for (let i = value; i < 4; i++) {
                this.elements.minusPlusBtn().eq(1).click()
                cy.log(i)
            }
        })
    }

    setNumberOfRooms() {
        this.elements.numberOfRooms().invoke('attr', 'value').then((value) => {
            for (let i = value; i < 2; i++) {
                this.elements.minusPlusBtn().eq(5).click()
                cy.log(i)
            }
        })
    }

    populateOccupancyForm() {
        this.clickOccupancyForm()
        this.setGroupAdults()
        this.setNumberOfRooms()
    }

    clickSearchBtn() {
        this.elements.searchBtn().click()
    }

    switchTabToFlights() {
        this.elements.tabs().eq(1).click()
    }

}

module.exports = new StaysPage();