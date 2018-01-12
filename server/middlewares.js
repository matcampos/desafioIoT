var express           = require('express')    
    , cors            = require('cors')
    , bodyParser      = require('body-parser')    
    , methodOverride  = require('method-override')
    , morgan          = require('morgan')
    , responseTime    = require('response-time')
    , compress        = require('compression')
    , passport        = require('passport');

    // , upload          = require('express-fileupload')
module.exports = (app) => {

    app.use(cors({ origin: '*' }));


    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    // app.use(upload());

    app.use(methodOverride('X-HTTP-Method-Override'));
    app.use(passport.initialize());

    app.use(responseTime());


};