const collaborate = require("../Models/collaborateDB");
const Users = require("../models/usersDB");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const usersModal = Users.usersModal;
const collaborateModel = collaborate.collaborateModel;

module.exports.collaborate = (req, res) => {

    token = req.body.token;
    const userEmail = req.body.userEmail;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.FOODHEAVEN_EMAIL,
            pass: process.env.FOODHEAVEN_PASSWORD,
        },
    });

    try {
        jwt.verify(req.body.token, process.env.SECRET_KEY, function (err, result) {
            if (err) {
                return res.status(409).json({
                    msg: "Either the Token has expired or its null.",
                });
            } else {
                if (result) {
                    const userId = result.userId
                    usersModal.findOne({ _id: userId }, function (err, foundUser) {
                        if (err) {
                            return res.status(402).json({
                                msg: "Something went Wrong"
                            });
                        }
                        else {
                            if (foundUser) {
                                collaborateModel.findOne({ email: userEmail.email }, function (err, foundEmail) {
                                    if (!err) {
                                        if (foundEmail) {
                                            return res.status(403).json({
                                                msg: "Email Already Registerd!"
                                            })
                                        } else {
                                            const collaborate = new collaborateModel({
                                                email: userEmail.email
                                            });
                                            collaborate.save(function (err) {
                                                if (err) {
                                                    return res.status(500).json({
                                                        msg: "Internal Server Error",
                                                    });
                                                } else {
                                                    const options = {
                                                        from: "foodHeaven022@gmail.com",
                                                        to: userEmail.email,
                                                        subject: "foodHeaven Email Recieved",
                                                        html: `<h1>Thank you for showing interest in Collaborating with us.</h1>
                                                    <h3>Please send us your CV on our email Address.We will arrange an interview with you as soon as possible for an appropriate role.</h3>
                                                    <h4>Regards and Good luck for future.</h4>
                                                    <h5>foodHeaven Team</h5>`,
                                                    }
                                                    transporter.sendMail(options, function (err, info) {
                                                        if (err) {
                                                            return res.status(500).json({
                                                                msg: 'Something Went Wrong'
                                                            });
                                                        } else {
                                                            // console.log("Sent" + info.response);
                                                            return res.status(200).json({
                                                                msg: "Our team will contact you Asap.",
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    } else {
                                        res.status(500).json({
                                            msg: "Internal Server Error!"
                                        })
                                    }
                                });
                            } else {
                                return res.status(404).json({
                                    msg: "User Not Found"
                                });
                            }
                        }
                    });
                } else {
                    return res.status(403).json({
                        msg: 'Login to see this.'
                    })
                }
            }
        })

    } catch (error) {
        return res.status(500).json({
            msg: error,
        });
    }
}


// const userEmail = req.body.userEmail;
// const collaborate = new collaborateModel({
//     email: userEmail.email
// });

// collaborate.save(function (err) {
//     if (err) {
//         return res.status(500).json({
//             msg: "Internal Server Error",
//         });
//     } else {
//         return res.status(200).json({
//             msg: "Successfully Saved",
//         });
//     }
// });