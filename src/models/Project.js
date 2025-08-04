const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    tenant: {type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = mongoose.model("Project", projectSchema);
