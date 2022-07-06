import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";

export const ValidationJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      console.error(err);
      return res.status(422).json({ err });
    }
  };
};

export const Schemas = {
  data: Joi.object({
    username: Joi.string().alphanum().min(3).max(15).required(),
    fullname: Joi.string(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  }),
};
