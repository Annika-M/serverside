//30.6.2019 Annika Muttilainen - Ticket booking app

const mongoose = require('mongoose');
const routes = require('./routes/routes');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

mongoose.set('useFindAndModify', false);    //Lisätty myöhemmin, kun Updaten kanssa console antoi varoituksen

//Connection to mongodb 
mongoose.connect('mongodb://localhost:27017/ticketdata', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('Connection has been made');
}).on('error', () => {
    console.log('Connection error', error)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/', routes);

app.listen(3000, () => console.log('Listening port 3000'));