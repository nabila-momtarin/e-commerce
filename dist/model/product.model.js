"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: false,
    },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
productSchema.set("toJSON", {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    },
});
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
