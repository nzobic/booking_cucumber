class FlightsPage {

    elements = {
    whereFromField: () => cy.get('[data-ui-name="input_location_from_segment_0"]'),
    whereToField: () => cy.get('[data-ui-name="input_location_to_segment_0"]'),
    preselectedLocation: () => cy.get('.css-1sf9klz'),
    removePreselectedLocation: () => cy.get('.Icon-module__root___DweoM.css-lyj9ft.Icon-module__root--size-small___nolwT'),
    enterLocation: () => cy.get('[data-ui-name="input_text_autocomplete"]'),
    airportResultSearch: () => cy.get('[data-ui-name="locations_list_item"]'),
    calendarPlaceholder: () => cy.get('[data-ui-name="button_date_segment_0"]'),
    calendarArrowNext: () => cy.get('[class*="Calendar-module__control--next"]'),
    searchBtn: () => cy.get('[data-ui-name="button_search_submit"]')
    }


    clickOnWhereFrom() {
        this.elements.whereFromField().click()
    }

    selectAirport(text) {
        this.elements.airportResultSearch().contains(text).click()
    }

    selectLocationFrom(param1, param2) {
        if (this.elements.whereFromField().contains("Belgrade")) {
            cy.log("Location is preslected")
        } else {
            this.clickOnWhereFrom()
            this.elements.removePreselectedLocation().click()
            this.elements.enterLocation().type(param1)
            this.selectAirport(param2)
        }
    }

    // selectLocationFrom() {
    //     cy.get('[data-ui-name="input_location_from_segment_0"]').then(($ele) => {
    //     cy.log($ele.text())
    //     if (this.elements.whereFromField().contains("Belgrade")) {
    //         this.clickOnWhereFrom()
    //         this.elements.removePreselectedLocation().click()
    //         this.elements.enterLocation().type("Madrid")
    //         this.selectAirport("All airports")
    //     } else {
    //         cy.log("Location is NOT preslected")
    //     }
    //     })
    // }
    
    clickOnWhereTo() {
        this.elements.whereToField().click()
    }

    selectLocationTo(param1, param2) {
        if (this.elements.whereToField().contains("Where to?")) {
            this.clickOnWhereTo()
            this.elements.enterLocation().type(param1)
            this.selectAirport(param2)
        } else {
            cy.log("Location is preslected")
        }
    }

    clickOnCalendar() {
        this.elements.calendarPlaceholder().click()
    } 

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

    clickOnCalendarAndSetDate(date) {
        this.clickOnCalendar()
        this.setDate(date)
    }

    clickOnSearchButton() {
        this.elements.searchBtn().click()
    }
           
}

module.exports = new FlightsPage();