var express = require('express');
var router = express.Router();

var loadController = require('../controllers/owner');

router.post('/create',  loadController.create);

router.get('/getAll', loadController.getAll);

router.post('/getByCondition', loadController.getByCondition);

router.get('/getDetails/:id', loadController.getById);

router.post('/updateStatus/:id/:isAvailable', loadController.updateStatusById);

router.post('/updateDetails', loadController.updateDetails);

router.post('/delete', loadController.delete);

module.exports = router;
