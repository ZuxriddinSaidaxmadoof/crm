// joi
import Joi from "joi";

export const userSchema = Joi.object({
  login: Joi.string().required().valid(),
  password: Joi.string().required(),
  role: Joi.string().required(),
  sex: Joi.string().default(null),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  address: Joi.string().default(null),
  latitude: Joi.number(),
  longitude: Joi.number(),
  phone: Joi.array().default(null),
  groupId: Joi.number().default(null),
  brandId: Joi.number().required()
});
