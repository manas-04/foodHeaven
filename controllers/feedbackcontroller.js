const feedback = require("../Models/feedbackDB");

const feedbackModel = feedback.feedbackModel;

module.exports.feedback = (req, res) => {

    const userFeedback = req.body.userFeedback;
    const feedback = new feedbackModel({
        name: userFeedback.name,
        email: userFeedback.email,
        feedback: userFeedback.feedback
    });

    feedback.save(function (err) {
        if (err) {
            return res.status(500).json({
                msg: "Internal Server Error",
            });
        } else {
            return res.status(200).json({
                msg: "Successfully Saved",
            });
        }
    });
}