if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require ('morgan');
const path = require ('path');
const cors = require ('cors');
const multer = require('multer');

//Initialization
const app = express();
require('./database');

//seting 
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public'),
})

// Routes
app.use('/api/survey',require('./routes/survey'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))

// start the server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
})