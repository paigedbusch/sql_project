var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var conn = massive.connectSync({
  connectionString : "postgres://postgres:B710Ljr9v@@localhost/sql_project"
});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', conn);

var productsCtrl = require('./productsCtrl');

app.get('/products/:id', productsCtrl.getOne);
app.get('/products', productsCtrl.getAll);

app.post('/new', productsCtrl.create);

app.put('/update', productsCtrl.Update);

app.delete('/delete', productsCtrl.Delete);

app.listen('9090', function(){
  console.log("Successfully listening on port: 9090");
});