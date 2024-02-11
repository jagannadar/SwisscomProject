# Project Name
Application under test: https://www.swisscom.ch/en

## Description
This repository contains the code of end-to-end tests, written in Cypress framework.

Main pattern used for this project is Page Object Model. We describe elements of pages and the way they can behave and to interact with pages are in (pageactions folder).

And describe test specs (e2e folder) - things/flows we want to test and verify on our pages, using actions to put the app in a required state.

## Pre-requisite
1. Node.js - Type npm --version to check the successful installation
2. Git - Type git --version to check the successful installation
3. Visual Studio or any other IDE

## Installation
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx cypress verify` to verify installation


## Folder Structure
.<br />
├── e2e                   # contains spec files/tests to verify <br />
├── fixtures              # place to store testdata that your testcase needs <br /> 
├── pageactions           # contains classes which describes elements and interactions <br />
├── screenshots           # contains failed testcase screenshots <br />
├── support               # contains custom commands and global configuration <br />
├── videos                # video recordings of your test runs <br />


## Creating Page Objects
Page Objects represent the pages of the application and encapsulate the locators and interactions with the elements on those pages. Each page should have a corresponding Page Object class.

Example Page Object (productPage.ts):
 * Represents the ProductPage class, extending the BasePage.
 * This class encapsulates interactions and locators for a specific page.

## Writing Tests
Tests are written using a testing framework (e.g. Mocha) and utilize the Page Objects for interactions. Tests should be organized by functionality or feature.

Example : addToCart.cy.ts
 * This test utilizes the interaction / actions that are created in the page object classes.
 
## Running Tests
1. Run `npm run cy:open` to open cypress test runner
2. Run `npm run cy:chrome` to run tests in chrome browser in headed mode