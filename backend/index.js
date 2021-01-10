if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require ('morgan');
const multer = require ('multer');
const path = require ('path');
const cors = require ('cors');

//Initialization
const app = express();
require('./database');

//seting 
app.set('port',3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/survey',require('./routes/survey'));
app.use('/api/purchases',require('./routes/purchases'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

// start the server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
})