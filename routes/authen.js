const router = require('express').Router();
const User = require('../models/User');
const { VerifyEmail } = require('../utils/VerifyEmail');
const jwt = require('jsonwebtoken');


//! SIGN UP
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    let Email = await User.findOne({ email : email })
    if(Email) return res.json({ message : "Email Already Exist's", signedup :false })
    let Username = await User.findOne({ username: username })
    if(Username) return res.json({ message : "Username Already taken", signedup :false })
    if(!Username && !Email ) {
        User.create({ username, email, password })
            .then(()=>{
                // VerifyEmail(email,username)
                return res.json({ message : "Email sent, Verify email address", signedup : true })
            })
    }
})

//! LOG IN
router.post('/login', async (req,res)=>{
    const { username, password } = req.body;
    let user = await User.findOne({ username : username })
    if(!user) return res.json({message:"Username or Password Incorrect", loggedin : false})
    if(user.password === password) {
        jwt.sign({ username: username }, process.env.ACCESSTOKEN,(err,token)=>{
            res.cookie('logintoken',token)
            return res.json({message:"Logged In", loggedin : true})
        })
    }else{
        return res.json({message:"Password Incorrect", loggedin : false})
    }
})

//!Get the user
router.get('/getuser',(req,res)=>{
    res.send("Have to get the cookie")
})


//! Verifying your Email Address
router.get('/verify/:email',(req,res)=>{
    User.findOneAndUpdate({email:req.params.email},{ verified:true }).then(()=>{
        res.send("Your Email has been verified")
    })
})




//! All Users
router.get('/users', (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
})



module.exports = router;


