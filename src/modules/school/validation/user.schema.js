// joi
import Joi from "joi";

export const brandSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().default(null),
  latitude: Joi.number().default(null),
  longitude: Joi.number().default(null),
  phone: Joi.array().default(null),
  brandId: Joi.number().required()
});
