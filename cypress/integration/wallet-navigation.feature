Feature: wallet page navigation

    Background:
        Given admin is logged in to wallet staging site

    Scenario: Admin views account management
        When admin clicks operators-account management
        Then admin can view the account management page

    Scenario: Admin views permission group
        When admin clicks operators-permission group
        Then admin can view the permission group page

    Scenario: Admin views member management
        When admin clicks members-member management
        Then admin can view the member management page

    Scenario: Admin views member marker management
        When admin clicks members-member marker management
        Then admin can view the member marker management page

     Scenario: Admin views label management
        When admin clicks members-label management
        Then admin can view the label management page   

    Scenario: Admin views members online
        When admin clicks members-members online
        Then admin can view the members online page 

    Scenario: Admin views profile setting
        When admin clicks members-profile setting
        Then admin can view the profile setting page 

    