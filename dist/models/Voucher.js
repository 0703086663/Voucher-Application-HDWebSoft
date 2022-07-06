"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var voucherSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true,
        uppercase: true,
    },
    desc: {
        type: String,
    },
    discount: {
        type: Number,
        required: true,
        default: 0,
    },
    constraint: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Voucher", voucherSchema);
//# sourceMappingURL=Voucher.js.map