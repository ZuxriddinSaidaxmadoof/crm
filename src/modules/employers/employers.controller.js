import { ResData } from "../../common/resData.js";
import { EmployersException } from "./exception/employers.exception.js";
import { EmployersSchema } from "./validation/employers.schema.js";

export class EmployersController {
  #employersService;
  constructor(employersService) {
    this.#employersService = employersService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#employersService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getOneById(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#employersService.getOneById(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validated = EmployersSchema.validate(dto);

      if (validated.error) {
        throw new EmployersException(validated.error.message);
      }

      const resData = await this.#employersService.create(dto);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async update(req, res) {
    try {
      const dto = req.body[0];
      const Id = Number(req.params?.id);

      const data = {
        first_name: dto.firstName,
        last_name: dto.lastName,
        email: dto.email,
        phone: dto.phone,
        position: dto.position,
        file_id: dto.fileId,
        id: Id,
      };

      const validated = EmployersSchema.validate(dto);

      if (validated.error) {
        throw new EmployersException(validated.error.message);
      }

      const resData = await this.#employersService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const Id = req.params?.id;

      const resData = await this.#employersService.delete(Id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
