const Plot = require('../models/plot');

module.exports = {
    index,
    show,
   // new: newPlot,
    //create
}

function index(req,res) {
        res.render('plots/index')
}

function show(req,res) {
    Plot.findById(req.params.id, function(err, plot) {
        res.render('plots/show', { plot })
    })
  
}

// function newPlot(req,res) {
//     res.render('plots/new');
// }

// function create(req,res) {
//    const plot = new Plot(req.body);
//    plot.save(function(err ) {
//        if(err) return res.redirect('/plots/new');
//        res.redirect(`/plots/${plot._id}`);
//    });
// }