"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voucherRoutes = void 0;
var vouchers_controller_1 = require("../controllers/vouchers.controller");
var voucherRoutes = function (server) {
    server.route({
        method: "POST",
        path: "/voucher",
        handler: vouchers_controller_1.createVoucher,
    });
    server.route({
        method: "GET",
        path: "/voucher",
        handler: vouchers_controller_1.getVouchers,
    });
    server.route({
        method: "GET",
        path: "/voucher/{id}",
        handler: vouchers_controller_1.getVoucher,
    });
    server.route({
        method: "PUT",
        path: "/voucher/{id}",
        handler: vouchers_controller_1.updateVoucher,
    });
    server.route({
        method: "DELETE",
        path: "/voucher/{id}",
        handler: vouchers_controller_1.deleteVoucher,
    });
};
exports.voucherRoutes = voucherRoutes;
//# sourceMappingURL=voucher.routes.js.map