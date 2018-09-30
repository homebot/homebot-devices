const mongoose  = require('mongoose');
const mongoosePaginate  = require('mongoose-paginate');

const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  type: String,
  name: String,
  where: String,
  image:{
    origUrl: String,
    alisa_id: String
  },
  payload: {}
});

DeviceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Device', DeviceSchema);
