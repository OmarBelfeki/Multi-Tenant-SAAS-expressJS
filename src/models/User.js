const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["owner", "admin", "member"], default: "member"},
    tenant: {type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true}
})

userSchema.pre("save", async function(next) {
    if(!this.password) return next(new Error("Password is required"));
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);
