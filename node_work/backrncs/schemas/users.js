const mongoose = require('mongoose');

const users = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'users',
        timestamps: true
    }
)

module.exports = mongoose.model('User', users);