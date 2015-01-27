var path         = require( 'path' ),
    fs           = require( 'fs-extra' ),

    async        = require( 'async' ),
    _            = require( 'lodash' ),

    chai         = require( 'chai' ),
    expect       = chai.expect,
    assert       = chai.assert,
    should       = chai.should(),


    sinon        = require( 'sinon' ),
    EventEmitter = require( 'eventemitter2' ).EventEmitter,

    radic        = require( 'radic' ),
    util         = radic.util,

    rhbs         = require( '../lib' );

describe( 'radic-handlebars', function () {

    var expectedKeys = [ 'inheritance', 'registrar', 'paginate', 'helpers2', 'layouts', 'comparison', 'pluralize', 'helpers', 'eachitems', 'twitter', 'slugify', 'regexp', 'prettify', 'fileset', 'i18nliner', 'fs', 'array', 'json', 'analyticsjs' ];
    var expectedHelperKeys = [ 'helperMissing', 'blockHelperMissing', 'each', 'if', 'unless', 'with', 'log', 'lookup' ];
    var helperFunctions = {
        array     : [ 'where', 'findWhere', 'join', 'pluck', 'map', 'sort', 'filter', 'slice', 'sizeBetween' ],
        //  ,
        comparison: [ 'equal', 'equal-some', 'equal-every', 'gt', 'lt' ],
        fileset   : [ 'fileset' ],
        fs        : [ 'fs-appendFile', 'fs-chmod' ]
    };

    describe( 'exports', function () {
        it( 'should export the functions', function () {
            rhbs.getAllHelperKeys.should.be.a( 'function' );
            rhbs.getAllHelpers.should.be.a( 'function' );
            rhbs.getHandlebars.should.be.a( 'function' );
        } );
    } );
    describe( 'functions', function () {
        it( 'should return all helper keys as array', function () {
            var names = rhbs.getAllHelperKeys();
            names.should.be.a( 'array' );
            names.length.should.equal( expectedKeys.length );
        } );
        it( 'should return all helpers as key->name object', function () {
            var helpers = rhbs.getAllHelpers();
            helpers.should.be.a( 'object' );
            helpers.should.have.keys( expectedKeys );
            //helpers.length.should.be.gt(5);
        } );
        it( 'should return handlebars without extra helpers', function () {
            var handlebars = rhbs.getHandlebars();
            _.keys( handlebars.helpers ).should.eql( expectedHelperKeys );
            //helpers.length.should.be.gt(5);
        } );
        describe( 'handlebars with specified helpers registered', function () {
            var helpers = [], helperKeys = expectedHelperKeys;
            _.each( helperFunctions, function ( fns, key ) {
                it( 'should return handlebars with helpers of modules: ' + helpers.join( ', ' ), function () {
                    helpers.push( key );
                    helperKeys.push.apply( helperKeys, fns );
                    var handlebars = rhbs.getHandlebars( helpers );
                    handlebars.helpers.should.include.keys( helperKeys );
                } );
            } );

        } );
    } );
    describe( 'helpers', function () {
        require( '../node_modules/handlebars-helper-slugify/test' );
        require( '../node_modules/handlebars-registrar/test/handlebars-registrar.spec' );
    } );

} );
