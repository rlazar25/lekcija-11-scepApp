const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap-icons/'));

app.use('/', require('./routes'));

app.listen(process.env.PORT, ()=>{
    console.log('Server started on ' + process.env.PORT);
})