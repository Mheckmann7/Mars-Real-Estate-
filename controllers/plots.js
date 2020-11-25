
const Plot = require('../models/plot');


module.exports = {
    index,
    show,
    new: newPlot,
    create,
    edit,
    update,
    delete: deletePlot
  
}

function index(req,res) {
        Plot.find({}, function(err, plots) {
            res.render('plots/index', {
                plots
            })
        })
}

function show(req,res) {
    Plot.findById(req.params.id, function(err, plot) {
        res.render('plots/show', { plot })
    })
  
}

function newPlot(req,res) {
    res.render('plots/new');
}

function create(req,res) {
   const plot = new Plot(req.body);
   plot.save(function(err ) {
       if(err) return res.redirect('/plots/new');
       res.redirect(`/plots/${plot._id}`);
   });
}

function edit(req, res) {
  Plot.findById(req.params.id, function(err, plot) {
      res.render('plots/edit', {plot});
  })
}

function update(req, res) {
    Plot.findById(req.params.id, function(err, plot) {
        Plot.findByIdAndUpdate(req.params.id, 
            req.body,
            {new:true}, 
            function(err) {
            console.log('Updated');
            if(err) return res.redirect('/plots');
            res.redirect(`/plots`);
        });
    });
}

function deletePlot(req,res) {
    Plot.findById(req.params.id, function(err, plot) {
        Plot.findByIdAndDelete(req.params.id, function(err) {
            if(err) return res.redirect('/plots');
            res.redirect(`/plots`)
        })
    })
}