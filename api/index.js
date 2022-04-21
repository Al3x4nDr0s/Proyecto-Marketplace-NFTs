const express = require ('express');
const server = express();
const morgan = require ('morgan');
const cookieParser = require('cookie-parser');
const routes = require ('./src/routes/index.js');
const mongoose = require ('mongoose');

//connect con db

mongoose.connect('mongodb://localhost/market-nft')
    .then(db=>console.log('database connected'))
    .catch(err=>console.log(err))

//settings
server.set('port', process.env.PORT || 3000);

//middlewares
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//routes
server.use('/', routes);

//control de errores

server.use((err, req, res, next) => { 
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

//listener

server.listen(server.get('port'), () => {
    console.log('server on port', server.get('port'));
})