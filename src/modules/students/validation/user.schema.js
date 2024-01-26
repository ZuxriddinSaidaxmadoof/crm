// joi
import Joi from "joi";

export const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  number: Joi.array(),
  about: Joi.string(),
});
