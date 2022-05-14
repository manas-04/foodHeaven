const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            required: [true],
        },
        lName: {
            type: String,
            required: [true],
        },
        middleName: {
            type: String
        },
        email: {
            type: String,
            required: [true]
        },
        phoneNo: {
            type: String
        },
        address: {
            type: String
        },
        country: {
            type: String
        },
        dob: {
            type: Date
        },
        password: {
            type: String,
            required: [true]
        },
        jwtToken: {
            type: String,
        },
        isLoggedIn: {
            type: Boolean
        },
        resetToken: {
            type: String
        },
    }
);

const usersModal = mongoose.model("user", userSchema);

module.exports.userSchema = userSchema;
module.exports.usersModal = usersModal;