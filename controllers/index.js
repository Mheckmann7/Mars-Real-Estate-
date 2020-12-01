const Plot = require('../models/plot');
module.exports = {
    index,

};

function index(req,res) {
    Plot.find({}, function(err, plots) {
        res.render('index', {
            plots
        })
    })
}


