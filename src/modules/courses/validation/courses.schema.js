import Joi from "joi";

export const coursesSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  startDate: Joi.string(),
  endDate: Joi.string(),
  instructor: Joi.number().required(),
});

