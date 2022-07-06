"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var eventSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true,
        uppercase: true,
    },
    desc: {
        type: String,
    },
    voucher: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: "voucher",
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    enable: {
        type: Boolean,
        required: true,
        default: false,
    },
    endDate: {
        type: Date,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Event", eventSchema);
//# sourceMappingURL=Event.js.map