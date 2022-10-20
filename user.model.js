const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    registeredOn:{
        type: Date,
        default: Date.now
    },
    lastLogin:{
        type: Date,
        default: Date.now
    },
    projects: [{
        projectid: mongoose.Schema.Types.ObjectId ,
        role: mongoose.Schema.Types.ObjectId ,
        team: mongoose.Schema.Types.ObjectId ,
        accesslevel: mongoose.Schema.Types.ObjectId ,
        status: String, 
    }],
    refenvid :[{
        type: mongoose.Schema.Types.ObjectId,
    }]
}, {
    timestamps: true
})

const User = mongoose.model('kt_users', userSchema)

module.exports = User