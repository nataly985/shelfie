const express = require('express');
const bodyParser = require('body-parser');
const sc = require('./controller.js');
const massive = require('massive');
// const dotenv = 
require('dotenv').config();


const app = express();

app.use( bodyParser.json() );
massive( process.env.CONNECTION_STRING ).then( db => {
    console.log(db)
app.set( 'db', db)
});

app.get('/api/product', sc.read);
app.post('/api/product', sc.create);
app.put('api/product/:id', sc. update);
app.delete('api/product/:id', sc.delete);

const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

