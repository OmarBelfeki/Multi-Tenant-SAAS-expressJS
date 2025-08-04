const mongoose = require("mongoose");


const tenantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    plan: {type: String, enum: ["basic", "pro"], default: "basic"}
})

module.exports = mongoose.model("Tenant", tenantSchema);
