# CommunityZUITest
Sample UI Test for Community-Z
Introduction
This document provides documentation to be used as basis for test implementation. UITests should be automated where possible and executed following the Test Strategy document (find here and there). Where automation is not possible or not not required, manual testing has to be executed, evaluated, documented.

Test is considered failed if expected result or behavior not achieved.

Test level
System test

Test type
Functional

Frameworks
Jasmine
Protractor

System under test (SUT)
https://community-z.com/

Iteration
CommunityZ\Release 5\Sprint 24

Test Cases
ID: 33456
Automated: no
Prio: 3
Summary: Basic home page structure
Items to be tested: Design
Users: Not logged in
Pre-conditions: none
High-level steps:
1. The user loads url without login
2. Visual inspection of basic page structure
Input: none
Expected result:
0. Main parts are: 
1. Menu area with clickable menu items/dropdowns
2. Not clickable design elements
3. Random offered Event list
4. Footer

ID: 47443
Automated: no
Prio: 2
Summary: Test features the require login
Items to be tested: Login modal
Users: Not logged in
Pre-conditions: none
High-level steps:
1. Load url without login
2. Try to access features that require login (Creating, chat etc.)
3. Close login modal when appeared
Input: none
Expected result:
1. Login modal apears for the user who tries to access such features

ID: 23553
Automated: yes
Prio: 2
Summary: Language switch should have effect on displayed language
Items to be tested: Language modul
Users: Not logged in
Pre-conditions: Browser language set to English
High-level steps:
1. Load url without login
2. Check default language
3. Switch language using dropdown
4. Check language changed
Input: none
Expected result:
1. Default page language identical to browser language (English or Russian supported)
2. After switch, text automatically changed to the newly set language (i.e.: Russian)

ID: 3456
Automted: yes
Prio: 2
Summary: Cookie popup appears automatically at first page load, and can be closed by user
Items to be tested: Cookie modul
Users: Not logged in
Pre-condition: clear cache
High-leve steps:
1. Load url
2. Check cookie popup
3. Accept cookies
4. Check popup
Input: none
Expected result:
Cookie popup is displayed autoatically for user
User can Accept cookies, therefore popup disappears from UI

ID: 5432
Automated: yes
Prio: 1
Summary: Communities can be found by Search feature. Basic search is based on Title or Tags. This test should run Title search. Results correspond with applied search keyword.
Items to be tested: Search modul, Result display
Users: Not logged in
Pre-conditions: user navigates to Community search page, using one of the two applicable buttons on the UI
High-level steps:
1. Load url
2. Click 'See all communities' button or 'Communities' from menu bar
3. Get any existing Community name based on actual db
4. Use this name as search keyword
5. Check result of search
Input: retrieve any existing Company name from actual page
Expeted results:
1. First result should be exact match
2. Rest of the results not necessary contain expected Community name, they might be found by Tag. This is tested separately. (e.g. Community-Z is name and tag at the same time)

ID: 5433
Automated: yes
Prio: 1
Summary: Communities can be found by Search feature. Basic search is based on Title or Tags. This test should run Tag search. Results correspond with applied search keyword.
Items to be tested: Search modul, Result display
Users: Not logged in
Pre-conditions: user navigates to Community search page, using one of the two applicable buttons on the UI
High-level steps:
1. Load url
2. Click 'See all communities' button or 'Communities' from menu bar
3. Get any existing Tag based on actual db by opening a card deatils page
4. Use this tag as search keyword
5. Check result of search
Input: Retrieve an existing tag from page
Expeted results:
1. Select a random Community card, details page should show search keyword as Tag.

ID: 5434
Automated: yes
Prio: 1
Summary: Communities can be found by Search feature. Basic search is based on Title or Tags. This test should run search without any result.
Items to be tested: Search modul, Result display
Users: Not logged in
Pre-conditions: user navigates to Community search page, using one of the two applicable buttons on the UI
High-level steps:
1. Load url
2. Click 'See all communities' button or 'Communities' from menu bar
3. Enter a search keyword that definitly won't show results
Input: random number
Expeted results:
1. 'No Results Found'

ID: 9987
Automated: yes
Prio: 1
Summary: Location filter applies while search
Items to be tested: filter modul, seach modul, result display
Users: Not logged in
Pre-conditions: user navigates to Community search page, using one of the two applicable buttons on the UI
High-level steps: 
1. Load url
2. Click 'See all communities' button or 'Communities' from menu bar
3. Set any Location filter
4. Check results
Input: retrieve avaiable locations from actual dropdown
Expected results:
1. Locations can be selected
2. Selected location appears in Community details pane

ID: 55447
Automated: yes TODO
Prio: 1
Items to be tested: Category filter modul
Users: Not logged in
Pre-conditions: none
High-level steps: 
1. Load url home page
2. Click 'ONLINE EVENTS' link
3. Check search properties that are set automatically
Input: none
Expected results:
Category 'Online' filter applied in the search automatically

ID: 5487
Autoamted: yes TODO
Prio: 2
Items to be tested: Searh counter modul
Uers: Not logged in
Pre-conditions: user should navigate to EVENT Search subpage and apply a Category filter
High-level steps:
1. Load page
2. Navigate to Event search subpage
3. Apply a filter
4. Make sure every card is loaded
5. Check counter number for UPCOMING EVENTS and PAST EVENTS
6. Check number of cards
Input: none
Expected results:
Number displayed in counter should be equal to number of EVENT cards displayed as search result


