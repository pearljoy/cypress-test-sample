Feature: Log in page load

    Background:
        Given browser is at Onewallet admin staging site

    Scenario: Sign In validation for invalid signin
        When admin clicks Signin button with both username and password fields blank
        Then validation error messages for blank username and password appears

    Scenario: Sign In validation wrong username or password
        When admin signs in with wrong username or password
        Then an error message pops up "Invalid Username or Password"

    Scenario: Log in successful
        When admin enters correct username and password
        Then admin signs in successfully and redirects to default page
        


