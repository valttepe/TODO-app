*** Settings ***
Library    SeleniumLibrary
Test Setup    Open Test Browser
Test Teardown    Close Browser


*** Variables ***
${URL}     http://localhost:8000
${BROWSER}    Chrome
${ADD_BUTTON}  add-new
${ADD_TITLE}    add-title
${ADD_DESCRIPTION}    add-description 

*** Test Cases ***
Add TODO
    Wait Until Element Is Visible    id=${ADD_BUTTON}    timeout=10s
    Input Text     locator=${ADD_TITLE}    text=Taskin otsikko 3
    Input Text     locator=${ADD_DESCRIPTION}    text=Taskin selite 3
    Click Element    id=${ADD_BUTTON}

*** Keywords ***
Open Test Browser
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window