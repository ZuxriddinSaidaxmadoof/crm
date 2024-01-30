// joi
import Joi from "joi";

export const brandSchema = Joi.object({
  studentId: Joi.number().required(),
  courseId: Joi.number().required()
});
