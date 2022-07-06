import { Schema, model, Document, Types } from "mongoose";

export interface IEvent extends Document {
  name: string;
  desc: string;
  voucher: Types.ObjectId;
  amount: number;
  enable: boolean;
  endDate: Date;
}

const eventSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      uppercase: true,
    },
    desc: {
      type: String,
    },
    voucher: {
      type: Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

export default model<IEvent>("Event", eventSchema);
