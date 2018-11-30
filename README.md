# ng-webpack starter

Complete simple, starter for Angular.Js and Bootstrap using Webpack.

This starter serves as a starting point for building AngularJS (1.x) with Bootstap 4.x applications using Webpack 2.x. 

* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Dev server with live reload.
* Well commented webpack configuration with default settings.
* Production builds with cache busting.
* Included test runner using karma to run tests and jasmine as the framework.
* It does not contain gulp and no grunt.

>Info: Be sure you have the latest version of Node.js and NPM

### Quickstart guide

> After Clone or Download the repo, then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/raphaelSm/ng-webpack <folder name>

# change directory to your app
$ cd <folder name>

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.x`+) and NPM (`2.x`+)

## Installing

* `dowload/clone` this repo
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)