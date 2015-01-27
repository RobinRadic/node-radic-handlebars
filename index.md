---
layout: page
title: Node Radic Handlebars
minify_content: false
navigation:
  - name: Home
    link: /
    icon: fa fa-home
  - name: Overview
    link: /node-radic-handlebars
    icon: fa fa-dashboard
  - name: Coverage
    link: /node-radic-handlebars/coverage
    icon: fa fa-code
  - name: Namespaces
    link: "#"
    icon: fa fa-mortar-board
    children:
      - name: rhbs
        link: /node-radic-handlebars/rhbs.html

---
# radic-handlebars
[![Travis build status](https://img.shields.io/travis/RobinRadic/node-radic-handlebars.svg)](http://travis-ci.org/RobinRadic/node-radic-handlebars)
[![NPM Version](https://img.shields.io/npm/v/radic-handlebars.svg)](http://npmjs.org/package/radic-handlebars)
[![NPM Downloads](https://img.shields.io/npm/dm/radic-handlebars.svg)](http://npmjs.org/package/radic-handlebars)
[![Goto documentation](http://img.shields.io/badge/goto-documentation-orange.svg)](http://robin.radic.nl/node-radic-handlebars)
[![Goto repository](http://img.shields.io/badge/goto-repository-orange.svg)](https://github.com/robinradic/node-radic-handlebars)
[![License](http://img.shields.io/badge/license-MIT-blue.svg)](http://radic.mit-license.org)

### Overview
`radic-handlebars` is a collection of third-party handlebars modules. It allows you to get a handlebars object with only the module helpers you define. Like this:
{% highlight javascript %}
var rhbs = require('radic-handlebars');

// You could check out what helper modules you can register
console.log(rhbs.getAllHelperKeys());
// returns something like: ['inheritance', 'registrar', 'paginate', 'helpers2', 'layouts', 'comparison', 'pluralize', 'helpers', 'eachitems', 'twitter', 'slugify', 'regexp', 'prettify', 'fileset', 'i18nliner', 'fs', 'array', 'json', 'analyticsjs']

var handlebars = rhbs.getHandlebars(['comparison', 'array', 'layouts']);
// returns handlebars with the helpers those modules provide registered.
{% endhighlight %}
  
## How to use

### Documentation
- [Detailed documentation](http://robin.radic.nl/node-radic)
  
  
  
### Installation
{% highlight bash %}
# Local install into project for using libraries and helpers
npm install --save radic-handlebars
{% endhighlight %}
  
  
### License
Copyright 2014 Robin Radic 

[MIT Licensed](http://radic.mit-license.org)

