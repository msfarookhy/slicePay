var express = require('express');
var router = express.Router();
var db = require('../models');

//product
router.get("/", (req, res) => {
    db.Product.find()
        .then(product => res.json(product))
        .catch(err => res.send(err));
});

// product home route
router.post("/", (req, res) => {
    db.Product.create(req.body)
        .then(res.redirect("/product"))
        .catch(err => res.send(err));
});

// product show
router.get("/:id", (req, res) => {
    let id = req.params.id;
    db.Product.findById(id)
        .then(product => res.json(product))
        .catch(err => res.send(err));
});

// update product
router.put("/:id", (req, res) => {
    db.Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(product => res.json(product))
        .catch(err => res.send(err));
});


// delte product
router.delete("/:id", (req, res) => {
    db.Product.remove({ _id: req.params.id })
        .then(res.send("removed"))
        .catch(err => res.send(err));
});

module.exports = router;


