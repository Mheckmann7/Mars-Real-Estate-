const router = require('express').Router();
const { route } = require('.');
const plotsCtrl = require('../controllers/plots');


router.get('/', plotsCtrl.index);
router.get('/new', plotsCtrl.new);
router.post('/', plotsCtrl.create);
router.get('/:id', plotsCtrl.show);
router.get('/:id/edit', plotsCtrl.edit);
router.put('/:id', plotsCtrl.update);
router.delete('/:id', plotsCtrl.delete);

module.exports = router;