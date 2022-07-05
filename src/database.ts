import mongoose from "mongoose";
import { ConnectionOptions } from "tls";

mongoose
  .connect(
    "mongodb+srv://admin:admin@hdtrainingcluster.x2gfxia.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectionOptions
  )
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.log(err));
