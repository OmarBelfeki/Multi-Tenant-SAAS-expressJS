const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Tenant = require("../models/Tenant");
const router = express.Router();


router.post("/register", async (req, res) => {
    try{
        const {tenantName, name, email, password} = req.body;
        const tenant = await Tenant.create({name: tenantName});
        const user = await User.create({name, email, password, role: "owner", tenant: tenant._id});
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});
        res.json({token, tenant, user});

    }catch(e){
        res.status(500).json({message: e.message});
    }
});

router.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email}).populate("tenant");
        if(!user || !(await user.matchPassword(password)))
            return res.status(401).json({message: "Invalid credentials"});
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});
        res.json({token, user});
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router
