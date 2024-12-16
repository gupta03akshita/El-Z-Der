import mongoose,{ Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    alerts: {
        type: Object,
        notification :{
            type: String,
            date: Date
        },
        priority:{
            type: Number,
            default: 0
        }
    },
    contactsEmergency: { 
        type: Array,
        contactName: String,
        contactNumber: String
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
