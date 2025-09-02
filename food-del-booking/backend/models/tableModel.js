const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true,
        unique: true
    },
    seats: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    location: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;