/**
 * This file contains model schema for Orders
 */

const mongoose = require('mongoose');
const constants = require('../utils/constants.util');

/**
 * userID | Order Status - [success, failed, cancelled] |
 * items placed | total items | total items |
 * zipcode of the address of delivery
 * timestamps - created and updated time
 */

const OrderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: [constants.order_status.success, constants.order_status.failed, constants.order_status.cancelled],
        default: constants.order_status.success
    },
    items: {
        type: [String],
        required : true
    },
    total_items: {
        type: Number,
        required: true
    },
    total_cost: {
        type: Number,
        required : true
    },
    zip_code: {
        type: String,
        required : true
    },
    created_at: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    updated_at: {
        type: Date
    }
});

module.exports = mongoose.model("Order", OrderSchema);