
var loadModel = require('../models/agreement');

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
        isActive: req.params.isActive
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
    loadModel.updateOne({
        _id: req.body.id
    }, {
        isActive: false
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


