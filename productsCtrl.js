var app = require('./index');

module.exports = {
    create: function(req, res) {
        var db = app.get('db');
        db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl], function(err, products) {
           products.push(req.body);
           console.log(err, 'Added product.')
           res.send(products); 
        });
    },
    getOne: function(req, res) {
        var db = app.get('db');
        console.log(req.params.id);
        db.read_product([req.params.id], function(err, products) {
            res.send(products);
        });
    },
    getAll: function(req, res) {
        var db = app.get('db');
        db.read_product(function(err, products) {
            res.send(products);
        });
    },
    Update: function(req, res) {
        var db = app.get('db');
        db.update_product(function(err, products) {
            for (var i = 0; i < products.length; i++) {
                if (req.body.id === products[i].id) {
                    products[i] = req.body;
                }
            }
            res.send(products);
        });
    },
    Delete: function() {
        var db = app.get('db');
        db.delete_product(function(err, products) {
            for (var i = 0; i < products.length; i++) {
                if (req.body.id === products[i].id) {
                    delete products[i];
                }
            }
            res.send(products);
        });
    }
}