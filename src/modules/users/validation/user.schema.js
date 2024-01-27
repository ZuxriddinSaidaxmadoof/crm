// joi
import Joi from "joi";

export const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  number: Joi.number().required(),
  password: Joi.string().required(),
});

export const loginSchema = Joi.object({
  number: Joi.number().required(),
  password: Joi.string().required(),
});