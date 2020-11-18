const Plot = require('../models/plot');

module.exports = {
    index
}

function index(req,res) {
    res.render('plots/index')
}