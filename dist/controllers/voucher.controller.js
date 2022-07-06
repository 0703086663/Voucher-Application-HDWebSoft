"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVoucher = exports.updateVoucher = exports.getVoucher = exports.getVouchers = exports.createVoucher = void 0;
var Voucher_1 = __importDefault(require("../models/Voucher"));
var createVoucher = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var voucher, voucherSaved, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                voucher = new Voucher_1.default(request.payload);
                return [4 /*yield*/, voucher.save()];
            case 1:
                voucherSaved = _a.sent();
                return [2 /*return*/, h.response(voucherSaved)];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, h.response(err_1).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createVoucher = createVoucher;
var getVouchers = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var vouchers, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Voucher_1.default.find()];
            case 1:
                vouchers = _a.sent();
                return [2 /*return*/, h.response(vouchers)];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, h.response(err_2).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getVouchers = getVouchers;
var getVoucher = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var voucherfound, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Voucher_1.default.findById(request.params.id)];
            case 1:
                voucherfound = _a.sent();
                if (voucherfound) {
                    return [2 /*return*/, h.response(voucherfound)];
                }
                return [2 /*return*/, h.response().code(404)];
            case 2:
                err_3 = _a.sent();
                return [2 /*return*/, h.response(err_3).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getVoucher = getVoucher;
var updateVoucher = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedVoucher, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Voucher_1.default.findByIdAndUpdate(request.params.id, request.payload || {}, { new: true })];
            case 1:
                updatedVoucher = _a.sent();
                if (updatedVoucher) {
                    return [2 /*return*/, h.response(updatedVoucher)];
                }
                return [2 /*return*/, h.response().code(404)];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, h.response(err_4).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateVoucher = updateVoucher;
var deleteVoucher = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedVoucher, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Voucher_1.default.findByIdAndDelete(request.params.id)];
            case 1:
                deletedVoucher = _a.sent();
                if (deletedVoucher) {
                    return [2 /*return*/, h.response(deletedVoucher)];
                }
                return [2 /*return*/, h.response().code(404)];
            case 2:
                err_5 = _a.sent();
                return [2 /*return*/, h.response(err_5).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteVoucher = deleteVoucher;
//# sourceMappingURL=voucher.controller.js.map