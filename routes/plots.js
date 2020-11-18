const router = require('express').Router();
const plotsCtrl = require('../controllers/plots');

router.get('/plots', plotsCtrl.index);

module.exports = router;