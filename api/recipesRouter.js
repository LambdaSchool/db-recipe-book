const codes = require("./../data/statusCodes");

const express = require("express");
const db = require("../data/db");
const router = express.Router();

router.get('/', (req, res, next) => {
    db('recipes')
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(err => {
        next(err);
    })
});

module.exports = router;