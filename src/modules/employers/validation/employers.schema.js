import Joi from "joi";

export const EmployersSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  position: Joi.string().required(),
  fileId: Joi.number(),
});
