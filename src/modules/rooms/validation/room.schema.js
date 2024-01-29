import Joi from "joi";

export const RoomSchema = Joi.object({
  number: Joi.number(),
  name: Joi.string(),
  floor: Joi.number(),
  capacity: Joi.number(),
});
