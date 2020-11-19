const router = require('express').Router();
const plotsCtrl = require('../controllers/plots');


router.get('/', plotsCtrl.index);
//router.get('/new', plotsCtrl.new);
//router.post('/', plotsCtrl.create);
router.get('/:id', plotsCtrl.show);

module.exports = router;