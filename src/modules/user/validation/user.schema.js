// joi
import Joi from "joi";

export const userSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
  sex: Joi.string().default(null),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  address: Joi.string().default(null),
  latitude: Joi.number(),
  longitude: Joi.number(),
  phone: Joi.array().default(null),
  group_id: Joi.number().default(null),
  brand_id: Joi.number().default(null)
});


// id serial PRIMARY KEY,
// login VARCHAR(32) unique not null,
// password text not null,
// role role_type not null,
// sex sex_type default null,
// first_name varchar(64) not null,
// last_name varchar(64) not null,
// address VARCHAR(256) DEFAULT NULL,
// latitude numeric default null,
// longitude numeric default null,
// phone int
// [] DEFAULT null,
// group_id int default null,
// brand_id int not null,
// constraint fk_brand_id foreign key
// (brand_id) references brands
// (id)
