const router = require('express').Router();
const plotsCtrl = require('../controllers/plots');


router.get('/', plotsCtrl.index);
router.get('/new', plotsCtrl.new);
router.post('/', plotsCtrl.create);
router.get('/:id', plotsCtrl.show);
router.get('/:id/edit', isLoggedIn, plotsCtrl.edit);
router.put('/:id', plotsCtrl.update);
router.delete('/:id', isLoggedIn, plotsCtrl.delete);

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router;