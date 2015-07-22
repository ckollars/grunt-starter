# Grunt Starter

> Common Grunt tasks used on most projects

## Prerequisites

* [NodeJS & NPM](http://nodejs.org/) Node is used for running grunt tasks.
* [GruntJS](http://gruntjs.com/) Grunt a Javascript task runner.


## Installation

Install the set of Grunt plugins in the root folder of your project:

```shell
npm install
```

Inside the `package.json` file there is a 3 variables, `bower, themeFolder &amp; staticFolder`. Set these variables to the appropriate project directory structure.


## Grunt Plugins

When installing this Grunt project you will be installing these plugins:

* [Grunt](http://gruntjs.com)
* [Glob](https://www.npmjs.com/package/glob)
* [Grunt Autoprefixer](https://www.npmjs.com/package/grunt-autoprefixer)
* [Grunt Contrib Clean](https://www.npmjs.com/package/grunt-contrib-clean)
* [Grunt Contrib Compress](https://www.npmjs.com/package/grunt-contrib-compress)
* [Grunt contrib Concat](https://www.npmjs.com/package/grunt-contrib-concat)
* [Grunt Contrib Copy](https://www.npmjs.com/package/grunt-contrib-copy)
* [Grunt Contrib CSSMin](https://www.npmjs.com/package/grunt-contrib-cssmin)
* [Grunt Contrib Imagemin](https://www.npmjs.com/package/grunt-contrib-imagemin)
* [Grunt Contrib SASS](https://www.npmjs.com/package/grunt-contrib-sass)
* [Grunt Contrib Uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
* [Grunt Contrib Watch](https://www.npmjs.com/package/grunt-contrib-watch)
* [Grunt Favicons](https://www.npmjs.com/package/grunt-favicons)
* [Grunt Grunticon](https://www.npmjs.com/package/grunt-grunticon)
* [Grunt Imageoptim](https://www.npmjs.com/package/grunt-imageoptim)
* [Grunt Notify](https://www.npmjs.com/package/grunt-notify)
* [Grunt SVGMin](https://www.npmjs.com/package/grunt-svgmin)
* [Load Grunt Tasks](https://www.npmjs.com/package/load-grunt-tasks)
* [Matchdep](https://www.npmjs.com/package/matchdep)
* [Time Grunt](https://www.npmjs.com/package/time-grunt)

## Grunt Tasks

`icons` - Runs `svgmin` followed by `grunticon` followed by `cssmin` followed by `clean:icons`.

* `svgmin` - Minifies SVG files in the `svgs` direcotry into the directory `compressed`
* `grunticon` - Builds data uri style sheets from SVGs
* `cssmin` - Minifies CSS files. Specificly the ones outputed from Grunticon.
* `clean:icons` - Cleans and deletes the `compressed` directory from within the `svgs` directroy in your theme.

`fav-icons` - Runs `favicons`.

* `favicons` - Creates a list of favicon images and meta tags from a `logo.png` within `favicons` directory and outputs into `favicons/build`.

`build-styles` - Runs `sass:build` followed by `autoprefixer:build`.

* `sass:build` - Converts sass from `scss` dirctory to css in the `css` directory.
* `autoprefixer:build` - Adds browser specific prefixes to the css files.

`build-scripts` - Runs `concat:build` followed by `uglify:build`.

* `concat:build` - Concatinates all the themes javascript files into one file named `js/dist/compiled.js`.
* `uglify:build` - Copy and minifies `compiled.js` file to `js/dist/compiled.min.js`.


