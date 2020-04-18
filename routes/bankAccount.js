<<<<<<< HEAD

=======
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
var express = require('express');
var router = express.Router();

var loadController = require('../controllers/bankAccount');

router.post('/create',  loadController.create);

router.get('/getAll', loadController.getAll);

router.post('/getByCondition', loadController.getByCondition);

router.get('/getDetails/:id', loadController.getById);

<<<<<<< HEAD
router.put('/updateStatus/:id/:isActive', loadController.updateStatusById);
=======
router.post('/updateStatus/:id/:isAvailable', loadController.updateStatusById);
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e

router.post('/updateDetails', loadController.updateDetails);

router.post('/delete', loadController.delete);

module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
