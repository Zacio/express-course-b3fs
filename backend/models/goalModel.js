const mongoose = require('mongoose')
const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Goal', goalSchema)
