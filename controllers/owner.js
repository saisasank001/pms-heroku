<<<<<<< HEAD

=======
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
var loadModel = require('../models/owner');

exports.create = function (req, res) {
    req.body.createdAt = req.body.createdAt?req.body.createdAt:new Date();
    loadModel.create(req.body, function (err, data) {
        if (!err) {
            res.send({
                success: true,
                data
            })
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}

exports.getByCondition = function (req, res) {
    loadModel.find(req.body, function (err, data) {
        if (!err) {
            res.send({
                success: true,
                data
            })
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}

exports.getAll = function (req, res) {
    loadModel.find({}, function (err, data) {
        if (!err) {
            res.send({
                success: true,
                data
            });
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}

exports.getById = function (req, res) {
    loadModel.findById(req.params.id, function (err, data) {
        if (!err) {
            res.send({
                success: true,
                data
            });
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}


exports.updateDetails = function (req, res) {
    loadModel.updateOne({
        _id: req.body.id
    }, req.body, function (err, device) {
        if (!err) {
            res.send({
                success: true,
                data: device
            })
        
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}

exports.updateStatusById = function (req, res) {
    loadModel.updateOne({
        _id: req.params.id
    }, {
<<<<<<< HEAD
        isActive: req.params.isActive
=======
        isAvailable: req.params.isAvailable
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
    }, function (err, data) {
        if (!err) {
            res.send({
                success: true,
                data
            })
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}

exports.delete = function (req, res) {
<<<<<<< HEAD
    loadModel.updateOne({
        _id: req.body.id
    }, {
        isActive: false
=======
    loadModel.deleteOne({
        _id: req.body.id
    }, {
        isAvailable: false
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
    }, function (err, data) {
        if (!err) {
            res.send({
                success: true,
                data
            });
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}
<<<<<<< HEAD


=======
>>>>>>> 753e67f2ae01fc1cce6a7368234bf03c9b91134e
