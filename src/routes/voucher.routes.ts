import { Server } from "@hapi/hapi";

import {
  createVoucher,
  getVouchers,
  getVoucher,
  updateVoucher,
  deleteVoucher,
} from "../controllers/vouchers.controller";

export const voucherRoutes = (server: Server) => {
  server.route({
    method: "POST",
    path: "/voucher",
    handler: createVoucher,
  });

  server.route({
    method: "GET",
    path: "/voucher",
    handler: getVouchers,
  });

  server.route({
    method: "GET",
    path: "/voucher/{id}",
    handler: getVoucher,
  });

  server.route({
    method: "PUT",
    path: "/voucher/{id}",
    handler: updateVoucher,
  });

  server.route({
    method: "DELETE",
    path: "/voucher/{id}",
    handler: deleteVoucher,
  });
};
