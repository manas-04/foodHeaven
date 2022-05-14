const mongoose = require('mongoose');

const collaborateSchema = new mongoose.Schema(
    {
        email: { type: String, required: [true] }
    }
);

const collaborateModel = mongoose.model("collabrations", collaborateSchema);

module.exports.collaborateSchema = collaborateSchema;
module.exports.collaborateModel = collaborateModel;