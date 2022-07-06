// import express from "express";
import { Server } from "@hapi/hapi";
import { routes } from "./routes/user.routes";
import { voucherRoutes } from "./routes/voucher.routes";

import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import Swagger from "./plugins/swagger";

export const init = async () => {
  const server: Server = new Server({
    port: 3000,
    host: "localhost",
  });

  //Routes
  routes(server);
  voucherRoutes(server);

  const plugins: any[] = [Inert, Vision, Swagger];
  await server.register(plugins);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(0);
});
