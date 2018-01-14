process.env.PORT = 3000;
let express = require('express');
var app = express();
var http = require('http').Server(app);

var module = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  responseTime = require('response-time'),
  compress = require('compression'),
  passport = require('passport')

// , upload          = require('express-fileupload')


// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.multipart({uploadDir: './public/img'}));
// app.use(express.multipart());
require('./middlewares')(app);
require('./api/app')(app);


http.listen(3000, () => {
  console.log('API Running on PORT: ' + 3000);
});



module.exports = app;
