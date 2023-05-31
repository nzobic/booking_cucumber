Feature: As I user I should be able to search for an accomodation on booking website

Background:
Given I am on Booking page


Scenario Outline: As I user I should be able to search for an accomodation in "<destination>" when I fill the form

    When I enter "<destination>" in destination
    And I select "<destination>" result from dropdown
    And I select start date "<startDate>" from calendar
    And I select end date "<endDate>" from calendar
    And I populate occupancy form
    And I click on search button
    And I check the filter with the lowest price
    Then I should be able to see available appartments at "<destination>"

    Examples:
        | destination   | startDate   | endDate     |
        | Budapest      | 2023-08-01  | 2023-08-05  |
        | Prague        | 2023-09-15  | 2023-09-17  |
