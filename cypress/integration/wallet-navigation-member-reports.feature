Feature: Member Reports navigation

    Background:
        Given admin is logged in to wallet staging site

    Scenario: Admin views member access audit history
        When admin clicks members-member reports-member access audit history
        Then admin can view the member access audit history page 

    Scenario: Admin views member ip address summary
        When admin clicks members-member reports-member ip address summary
        Then admin can view the member ip address summary page 

    Scenario: Admin views ip address summary
        When admin clicks members-member reports-ip address summary
        Then admin can view the ip address summary page 

    Scenario: Admin views member access summary report
        When admin clicks members-member reports-member access summary report
        Then admin can view the member access summary report page 

   Scenario: Admin views member interaction logs report
        When admin clicks members-member reports-member interaction logs report
        Then admin can view the member interaction logs report page

    Scenario: Admin views member session durstion
        When admin clicks members-member reports-member session duration
        Then admin can view the member session duration page 