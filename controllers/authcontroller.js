const bcrypt = require("bcrypt");
const Users = require("../models/usersDB");

const saltRounds = 12;

module.exports.signUp = (req,res) => {

    const user = req.body.user;
    const usersModal = Users.usersModal;

    try{
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
    }catch(err){
        return res.status(500).json({
            msg:err
        });   
    };

    console.log(user);

}

module.exports.logIn = (res,req) => {

}