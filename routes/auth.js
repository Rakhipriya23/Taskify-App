const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs")
//sign up

router.post("/register", async(req,res)=>{
    try {
        const {email,username,password} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({email,username,password:hashpassword});
        await user.save().then(() =>{
            res.status(200).json({message:'Signup successfully'});
        });
    } catch (error) {
        res.status(200).json({ message: "User already Exits"});

    }
})

//sign in

router.post("/signin", async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).json({ message: "user not found! Please sign up First"});

        }

        const ispasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!ispasswordCorrect){
            res.status(400).json({ message: "Password is not correct"});

        }
        const { password, ...others } = user._doc;
        res.status(200).json({ users:others });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error"});

    }
})

module.exports = router;