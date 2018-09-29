import mongoose from 'mongoose';
import response from '../../../helpers/response';
import request from '../../../helpers/request';
import pagination from '../../../helpers/pagination';
import mqtt from '../../../db/mqtt';

const Device = mongoose.model('Device');

exports.list = async function(req, res) {
  //if (!req.currentUser.canRead(req.locals.user)) return response.sendForbidden(res);

  const query = Object.assign(request.getFilteringOptions(req, ['name']));
  try {
    let result = await Device.paginate(query, request.getRequestOptions(req));
    pagination.setPaginationHeaders(res, result);
    res.json(result.docs);
  } catch(err) {
    return response.sendNotFound(res);
  };
};

exports.create = async function(req, res) {
  // const user = req.locals.user;
  //if (!req.currentUser.canEdit(user)) return response.sendForbidden(res);
  try {
    let device = new Device(req.body);
    device = await device.save();
    // user.devices.push(device);
    // await user.save();

    return response.sendCreated(res, device);
  } catch(err) {
    return response.sendBadRequest(res, err);
  }
};

exports.read = async function(req, res) {
  try {
    let device = await Device.findById(req.params.id);
    //if (!req.currentUser.canRead(device)) return response.sendForbidden(res);
    res.json(device);
  } catch(err){
    return response.sendNotFound(res);
  };
};

exports.update = async function(req, res) {
  try {
    let device = await Device.findById(req.params.id);
    //if (!req.currentUser.canEdit(device)) return response.sendForbidden(res);
    device = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true })
    mqtt.publish('/alisa', JSON.stringify({
      deviceId: device._id,
      turn: device.payload.turn || "off"
    }));
    res.json(device)
  } catch(err){
      response.sendBadRequest(res, err);
    };
};

exports.delete = async function(req, res) {
  try {
    let device = await Device.findById(req.params.id);
    //if (!req.currentUser.canEdit(device)) return response.sendForbidden(res);
    await Device.findByIdAndRemove(req.params.id);
    res.json({ message: 'Device successfully deleted' });
  } catch(err){
    return response.sendNotFound(res);
  }
};
