const bcrypt = require("bcrypt");
const Users = require("../models/usersDB");
const jwt=require("jsonwebtoken");
const nodemailer = require("nodemailer");

const saltRounds = 12;
const usersModal = Users.usersModal;

module.exports.signUp = (req,res) => {

    const user = req.body.user;

    try{

        usersModal.findOne({email:user.email},function (err,data){
            if(err){
                return res.status(500).json({
                    msg: "Internal Server Error",
                });
            }
            
            if(data){
                return res.status(201).json({
                    msg:"This email is already registered."
                });  
            }else{
                bcrypt.hash(user.password,saltRounds,function(err,hash){
                    if(!err){
                        const person = new usersModal({
                            fName:user.firstName,
                            lName:user.lastName,
                            email:user.email,
                            password:hash,
                        });
                        person.save(function(err){
                            if(err){
                                return res.status(401).json({
                                    msg:"Failed to Sign-Up. Please, try Again."
                                });
                            }else{
                                return res.status(200).json({
                                    msg:"Successfully, Signed Up."
                                });
                            }
                        });
                    }
                }); 
            }
        });

    }catch(err){
        return res.status(500).json({
            msg:err
        });   
    };

}

module.exports.logIn = (req,res) => {
    
    const user = req.body.user;

    try{
        usersModal.findOne({email:user.email},function(err,foundUser){
            if(err){
                return res.status(500).json({
                    msg:"Internal Server Error"
                });
            }
            else{
                if(foundUser){
                    bcrypt.compare(user.password,foundUser.password,function(err,result){
                        if(result===true){
                            const token = jwt.sign({ userId: foundUser._id }, process.env.SECRET_KEY, {
                                expiresIn: "60 min",
                            });   
                            if (!token){
                                return res.status(500).json({
                                  msg: "Internal server error.",
                                });
                            }
                            foundUser.jwtToken = token;
                            foundUser.isLoggedIn = true;
                            foundUser.save(function(err){
                                if(!err){
                                    res.status(200).json({
                                        msg:"Successfully Logged In.",
                                        userId: foundUser._id,
                                        token: token
                                    })
                                }else{
                                    return res.status(500).json({
                                        msg: "Internal server error.",
                                    });
                                }
                            });   
                        }
                        else{
                            return res.status(401).json({
                                msg:'Invalid Email or Password',
                            });
                        }
                    });
                }else{
                    return res.status(404).json({
                        msg:"User Not Found"
                })
            }}
        });
    }catch(err){
        return res.status(500).json({
            msg:err
        });   
    };
}

module.exports.validate = (req,res) => {

    const now = Date.now().valueOf() / 1000;

    jwt.verify(req.body.token,process.env.SECRET_KEY,function(err,result){
        console.log(now);
        console.log(result);
        if(err){
            return res.status(403).json({
                msg: "Internal server error.",
            });
        }else{
            if(result){
                    return res.status(200).json({
                        msg:"Valid Token."
                    });  
            }else{
                return res.status(403).json({
                    msg:"Invalid Token, Please Login Again."
                });
            }
        }
    });

    console.log(req.body.token);
}

module.exports.forgotPassword = (req, res) => {
    const user = req.body.user;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "foodHeaven022@gmail.com",
            pass: "aryanManas@22",
        },
    });

    const options = {
        from: "foodHeaven022@gmail.com",
        to: user.email,
        subject: "foodHeaven Password Reset",
        html: `<p>You have requested for the password reset.</p>
        <p>Click here to set a new password.</p>`,
        // <p>Click <a href='${process.env.FRONTEND_URL}/reset/${resetToken}'> here</a> to set a password.</p>`,
    }

    try{
        usersModal.findOne({email: user.email}, function (err, foundUser) {
            if (err) {
                return res.status(500).json({
                    msg: "Something Went Wrong",
                });
            }
            else {
                if (foundUser) {
                    transporter.sendMail(options, function (err, info) {
                        if (err){
                            console.log(err);
                            return res.status(500).json({
                                msg: "Internal server error.",
                            });
                        }else{
                            console.log("Sent" + info.response);
                            return res.status(200).json({
                                msg: "Email with instructions is sent on your mail.",
                                // resetToken: resetToken
                            });
                        }
                    });
                } else {
                    return res.status(404).json({
                        msg: "User not Found",
                    });
                }
            }
        });
    } catch (err) {
        return res.status(500).json({
            msg: err,
        });
    }
}

module.exports.resetPassword = (req, res) => {
    const user = req.body.user;

    try {
        usersModal.findOne({ email: user.email }, function (err, foundUser) {
            if (err) {
                return res.status(500).json({
                    msg: "Something went Wrong"
                });
            }
            else {
                if (foundUser) {
                    bcrypt.hash(user.password, saltRounds, function (err, hash) {
                        if (err) {
                            return res.status(500).json({
                                msg: "Something Went Wrong"
                            });
                        }
                        else {
                            foundUser.password = hash;
                            foundUser.save(function (err) {
                                if (err) {
                                    return res.status(500).json({
                                        msg: "Something Went Wrong"
                                    });
                                }
                                else {
                                    return res.status(200).json({
                                        msg: "Password Reset Successfully"
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    return res.status(404).json({
                        msg: "User not Found"
                    });
                }
            }
        });
    } catch (err) {
        return res.status(500).json({
            msg: err
        });
    }
}

module.exports.logout = (req,res) => {
    
    jwt.verify(req.body.token,process.env.SECRET_KEY,function(err,result){
        if(err){
            console.log(err);
            return res.status(409).json({
                msg: "Either the Token has expired or its null.",
            });
        }else{
            const userId = result.userId;
            console.log(userId);
            usersModal.findOne( {_id:userId}, function(err,foundUser){
                if(err){
                    return res.status(404).json({
                        msg: "User Not Found",
                    });
                }else{
                    foundUser.jwtToken = "";
                    foundUser.isLoggedIn = false;
                    foundUser.save(function(err){
                        if(err){
                            return res.status(500).json({
                                msg: "Internal server error.",
                            });
                        }else{
                            res.status(200).json({ 
                                msg: "Successfully logged out."
                            });
                        }
                    })
                }
            })
        }
    });

}