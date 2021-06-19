const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: Array,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
    reviews: {
        type: Array,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    info: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        default: Date.now,
    },
});
