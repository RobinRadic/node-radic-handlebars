var radic         = require( 'radic' ),
    util          = radic.util,
    async         = require( 'async' ),
    EventEmitter2 = require( 'eventemitter2' ).EventEmitter2,
    _             = require( 'lodash' ),
    rimraf        = require( 'rimraf' ),
    tmp           = require( 'tmp' ),
    fs            = require( 'fs-extra' );


var helpers = "handlebars-inheritance handlebars-registrar handlebars-paginate node-handlebars \
handlebars-layouts handlebars-comparison handlebars-helper-pluralize handlebars-helpers \
handlebars-helper-eachitems handlebars-helper-twitter handlebars-helper-slugify \
handlebars-regexp handlebars-helper-prettify handlebars-fileset i18nliner-handlebars \
handlebars-fs handlebars-array handlebars-json hbs-analyticsjs-snippet";

function getKey( helperName ) {
    var key = helperName
        .replace( 'handlebars', '' )
        .replace( 'helper', '' )
        .replace( /-/g, '' )
        .replace( 'hbs', '' )
        .replace( 'node', '' )
        .replace( 'snippet', '' );

    if ( key === 's' ) key = 'helpers';
    else if ( key === '' ) key = 'helpers2';

    return key;
}

var rhbs = module.exports = {};

rhbs.getAllHelpers = function () {
    var hbs = {};
    helpers.split( ' ' ).forEach( function ( helperName ) {
        hbs[ getKey( helperName ) ] = helperName;
    } );
    return hbs;
};

rhbs.getAllHelperKeys = function () {
    var keys = [];
    helpers.split( ' ' ).forEach( function ( helperName ) {
        keys.push( getKey( helperName ) );
    } );
    return keys;
};

rhbs.getHandlebars = function ( helpers ) {
    if(!util.defined(helpers)){
        helpers = [];
    }
    var handlebars = require( 'handlebars' );
    var availableHelpers = rhbs.getAllHelpers();
    _.each( availableHelpers, function ( name, key ) {
        //console.log(key, name);
        if ( helpers.indexOf( key ) !== -1 ) {
            var helper = require( name );
           // util.log('helper ' + key, helper );
            helper( handlebars );
        }
    } );
    return handlebars;
};


