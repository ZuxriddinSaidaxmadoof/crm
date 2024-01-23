// joi
import Joi from "joi";

export const brandSchema = Joi.object({
  childId: Joi.number().required(),
  parentId: Joi.number().required()
});
