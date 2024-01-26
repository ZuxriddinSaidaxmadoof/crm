// joi
import Joi from "joi";

export const userSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  number: Joi.number().required(),
  password: Joi.string().required(),
});
