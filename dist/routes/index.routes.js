"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var hapi_1 = require("@hapi/hapi");
var userRoutes = require("./user.routes");
var voucherRoutes = require("./voucher.routes");
var routes = function () {
    userRoutes.registerRoutes(hapi_1.Server);
    voucherRoutes.registerRoutes(hapi_1.Server);
};
exports.routes = routes;
//# sourceMappingURL=index.routes.js.map