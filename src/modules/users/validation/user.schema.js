// joi
import Joi from "joi";

export const brandSchema = Joi.object({
  name: Joi.string().required(),
  isPublic: Joi.boolean()
});


