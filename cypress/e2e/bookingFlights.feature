Feature: As I user I should be able to search for a flight on booking website

Background:
Given I am on Booking page


Scenario: As I user I should be able to search for a flight when I fill the form

    When I switch tab to Flights
    And I enter "Belgrade" in Where from? search field, and select "Nikola Tesla" Airport
    And I enter "Bodrum" in Where to? search field, and select "Milas-Bodrum" Airport
    And I select Start date "2023-08-04" from calendar
    And I select End date "2023-08-11" from calendar
    And I click on search button
    And I check the filter with "1 stop max"
    Then I should be able to see available flights with selected filter "1 stop"