var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/product', (req, res) => {
    res.render('index');
});


/* GET home page. */
router.get('/', (req, res) => {
    db.Product.find()
        .then((product) => res.json(product))
        .catch((error) => res.send(error));
});
// adding a new product
router.post('/', (req, res) => {
    console.log(req.body);
    db.Product.create(req.body)

        .then(res.redirect('/product'))
        .catch((error) => res.send(error));
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.Product.findById(id)
        .then((product) => res.json(product))
        .catch((err) => (err));
});

//update
router.put('/:id', (req, res) => {

    db.Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((product) => res.json(product))
        .catch((err) => (err));
})

//delete
router.delete('/:id', (req, res) => {
    db.Product.remove({ _id: req.params.id })
        .then((product) => res.send("removed"))
});


module.exports = router;