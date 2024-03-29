
var express = require('express');
var router = express.Router();

var loadController = require('../controllers/amenities');

router.post('/create',  loadController.create);

router.get('/getAll', loadController.getAll);

router.post('/getByCondition', loadController.getByCondition);

router.get('/getDetails/:id', loadController.getById);

router.put('/updateStatus/:id/:isActive', loadController.updateStatusById);

router.post('/updateDetails', loadController.updateDetails);

router.post('/delete/:tmp', loadController.delete);

module.exports = router;

