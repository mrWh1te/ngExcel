# ngExcel
[![Build Status](https://travis-ci.com/mrWh1te/ngExcel.svg?branch=master)](https://travis-ci.com/mrWh1te/ngExcel) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/24404360-9f85-498c-a9e6-f511f67ede35/deploy-status)](https://app.netlify.com/sites/ngexcel-demo/deploys)

<img align="right" src="https://raw.githubusercontent.com/mrWh1te/ngExcel/master/spreadsheet.png" width="175" alt="Spreadsheet App Icon" />
<!-- Icon author: https://pixabay.com/vectors/spreadsheet-application-window-grid-147749/ -->

[App Demo](http://ngexcel-demo.netlify.app) - [App Bundles' Analysis Report](http://ngexcel-demo.netlify.app/report.html) - [App Documentation](http://ngexcel-demo.netlify.app/docs)

A Spreadsheet Application built with Angular v10 using [ngLibrary](https://github.com/mrWh1te/ngLibrary) as a starting code template, for its Enterprise Reactive architecture.

Have fun!

> Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein

## User Experience

### Home Page
Spreadsheet
- Add rows (click downward arrow icon)
- Add columns (click right arrow icon)
- Auto-saves/restores spreadsheet to/from localstorage
- Reset spreadsheet with top-right icon
- Enter text, numbers or algebraic expressions for selected cell
    - Single form input, above spreadsheet with auto-focus feature (after cell click)
    - Algebraic expressions support Spreadsheet Cell Addresses
        - example: `= (A1 + B1)*10`
        - Algebraic expressions must start with `=`, no spaces before
- Uses CSS Grid directives from Flex-Layout module
    - spreadsheet is entirely done with CSS grid
    - mobile friendly

The data module is done with redux, so if you have the Redux devtools installed in your browser, you can play around. Otherwise, open the Chrome/Safari/What have you Devtools for the Console. Every action is logged there with pretty style.

## Architecture Overview
This project is based on ngLibrary therefore it uses ngLibrary's core programming values:
1) Single Responsibility Principle (SRP)
    - separate concerns, reduce code risks, promote individual growth
2) Minimal Time to Interactive (TTI)
    - loading initial and new pages for smooth UX
3) Good Developer Experience (DX)
    - balance DRY & WET programming principles, don't reinvent the wheel

To learn more about the ground floor architectural patterns used in this application, check out [ngLibrary's Readme](https://github.com/mrWh1te/ngLibrary#nglibrary). This project follows its Enterprise programming patterns. The readme explains the rudimentary patterns and their corresponding programming values.

The Spreadsheet is designed to minimize memory consumption both in the JS heap and in the rendered UI's HTML. It uses CSS Grid and saves spreadsheet's rows and columns, not a value for every spreadsheet cell. As you enter data into the Spreadsheet, the cell values are then created and stored in the application state.

Never the less, there is plenty of room for improvement. A "cache" hash-map of 1:1 look-up can improve the rendering of the spreadsheet (ie expression evaluation). Could stop lazily loading the SpreadsheetViewModule, and just import it directly into AppModule. Also, can delete cells from app state as the values are cleared. And more! With its current design, additional pipes can be added to "format" the cells look. The formatting could be kept separate from the cell values stored, then applied at the end of the binded UI pipe.

## Documentation
This project's documentation is generated with [Compodoc](https://compodoc.app/). You can view any time, online, right [here](http://ngexcel-demo.netlify.app/docs).

When working locally, you can watch/serve the files with this command:
```
$ npm run serve-docs
```

### Major 3rd Party Dependencies

In not re-inventing the wheel, ngLibrary uses these libraries in building its foundation:
- `@angular/cdk`
- `@angular/flex-layout`
- `@angular/material`
- `@ngrx/store`
- `@ngrx/effects`
- `@ngrx/entity`

This project uses CSS Grid via [Angular Flex-layout](https://github.com/angular/flex-layout) directives.

## Continuous Deployment

Continuous Deployment is setup with [Netlify](https://netlify.com). It automatically deploys the latest PROD build from the `master` branch. See the live [Demo](http://ngexcel-demo.netlify.app). It uses the `build-demo` script which will build the production distribution, analyze the bundles, setup the bundles report and generate documentation.

## Local Development

After cloning or downloading the repo's code into a folder on your computer, install the dependencies with `npm i`:
```
$ npm i
```

If you haven't already, install Angular's CLI:
```
$ npm i -g @angular/cli
```

You'll need it to run the Angular Development server and build the Production version with AoT.

### Development server

To run a development server locally (so you can see the app running), run:

```
$ ng serve
```
Then navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

## Further Angular help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

The frontend project's initial commit was generated with [ngLibrary](github.com/mrWh1te/ngLibrary) as the repository template.
