const mongoose = require('mongoose');
const response = require('../helpers/response');
const request = require('../helpers/request');
const pagination = require('../helpers/pagination');
const {
  mqtt
} = require('../db/mqtt');

const Device = require('../models/device');
require('../db/db');

exports.list = async function (req, res) {
  const query = Object.assign(request.getFilteringOptions(req, ['name']));
  try {
    let result = await Device.paginate(query, request.getRequestOptions(req));
    pagination.setPaginationHeaders(res, result);
    res.json(result.docs);
  } catch (err) {
    return response.sendNotFound(res);
  };
};

exports.create = async function (req, res) {
  try {
    let device = new Device(req.body);
    device = await device.save();

    return response.sendCreated(res, device);
  } catch (err) {
    return response.sendBadRequest(res, err);
  }
};

exports.read = async function (req, res) {
  try {
    let device = await Device.findById(req.params.id).exec();
    if (device) {
      res.json(device);
    } else {
      response.sendNotFound(res);
    }
  } catch (err) {
    return response.sendBadRequest(res, err);
  };
};

exports.update = async function (req, res) {
  try {
    let device = await Device.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }).exec();
    mqtt.publish('/alisa', JSON.stringify({
      deviceId: device._id,
      turn: device.payload.turn || "off"
    }));
    res.json(device)
  } catch (err) {
    response.sendBadRequest(res, err);
  };
};

exports.delete = async function (req, res) {
  try {
    let device = await Device.findById(req.params.id);
    if (device) {
      await Device.findByIdAndRemove(req.params.id).exec();
      res.json({
        message: 'Device successfully deleted'
      });
    } else {
      response.sendNotFound(res);
    }
  } catch (err) {
    response.sendBadRequest(res, err);
  }
};