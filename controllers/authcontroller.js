const bcrypt = require("bcrypt");
const Users = require("../models/usersDB");
const jwt=require("jsonwebtoken");

const saltRounds = 12;

module.exports.signUp = (req,res) => {

    const user = req.body.user;
    const usersModal = Users.usersModal;

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
    const usersModal = Users.usersModal;

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
                                expiresIn: "30 min",
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

    // const now = Date.now().valueOf() / 1000;

    jwt.verify(req.body.token,process.env.SECRET_KEY,function(err,result){
        // console.log(now);
        // console.log(result);
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